import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import AuthContent from "./AuthContenxt";

interface DecodedType {
  exp: number;
}

const RefreshToken = () => {
  const [expTime, setExpTime] = useState<number | null>(null);

  const getContext = useContext(AuthContent);
  const setIsValidCustomer = getContext?.setIsValidCustomer;
  const getTokenFromCookies = () => {
    const cookie = document.cookie.split("=");
    const accessToken = cookie[1];

    if (!accessToken) return null;
    if (!setIsValidCustomer) return null;

    setIsValidCustomer(true);
    return decodeURIComponent(accessToken);
  };

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
