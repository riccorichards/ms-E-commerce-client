import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { refreshAccessToken } from "../redux/appCall/VendorAppCall";

const RefreshToken: FC<{ port: string }> = ({ port }) => {
  const vendorTtl = useAppSelector((state) => state.vendor.ttl);
  const deliverymanTtl = useAppSelector((state) => state.deliveryman.ttl);
  const customerTtl = useAppSelector((state) => state.customer.ttl);
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
      const targetTTL =
        (vendorTtl && Date.now() + vendorTtl * 1000) ||
        (deliverymanTtl && Date.now() + deliverymanTtl * 1000) ||
        (customerTtl && Date.now() + customerTtl * 1000);

      if (!targetTTL) return;

      if (targetTTL < now) {
        refreshToken();
      } else {
        const delay = targetTTL - now - 300 * 1000;
        timeoutId = setTimeout(refreshToken, delay > 0 ? delay : 0);
      }
    }

    scheduleRefresh();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [vendorTtl, deliverymanTtl, port, dispatch, customerTtl]);

  return null;
};

export default RefreshToken;
