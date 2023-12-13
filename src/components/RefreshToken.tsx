import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

interface DecodedType {
  exp: number;
}

const RefreshToken = () => {
  const [expTime, setExpTime] = useState<number | null>(null);

  function getTokenFromCookies() {
    const accessToken = document.cookie.split("=");
    return accessToken ? accessToken[1] : null;
  }

  useEffect(() => {
    const token = getTokenFromCookies();
    if (token) {
      const decode: DecodedType = jwtDecode(token);
      setExpTime(decode.exp * 1000);
    }
  }, []); //eslint-disable-line

  const refreshAccessToken = async (): Promise<number | undefined> => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8001/refresh",
        withCredentials: true,
      });
      const decoded: DecodedType = jwtDecode(data);
      setExpTime(decoded.exp * 1000);
      return decoded.exp * 1000;
    } catch (error) {
      if (error instanceof Error) {
        Promise.reject(error.message);
      }
    }
  };

  useEffect(() => {
    if (!expTime) return;
    const now = Date.now();

    if (expTime < now) {
      refreshAccessToken();
    } else {
      const delay = expTime - now - 20 * 1000;

      const timeoutId = setTimeout(refreshAccessToken, delay > 0 ? delay : 0);

      return () => clearTimeout(timeoutId);
    }
  }, [expTime]);

  return null;
};

export default RefreshToken;
