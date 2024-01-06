import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { refreshAccessToken } from "../redux/appCall/VendorAppCall";

const RefreshToken: FC<{ port: string }> = ({ port }) => {
  const vendorTtl = useAppSelector((state) => state.vendor.ttl);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    function refreshToken() {
      if (port) {
        dispatch(refreshAccessToken(port));
      }
      scheduleRefresh();
    }

    function scheduleRefresh() {
      const now = Date.now();
      const targetTTL = (vendorTtl && Date.now() + vendorTtl * 1000) || null;
      if (!targetTTL) return;

      if (targetTTL < now) {
        refreshToken();
      } else {
        const delay = targetTTL - now - 20 * 1000;
        timeoutId = setTimeout(refreshToken, delay > 0 ? delay : 0);
      }
    }

    scheduleRefresh();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [vendorTtl, port, dispatch]);

  return null;
};

export default RefreshToken;
