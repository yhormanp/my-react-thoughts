import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt from 'jwt-decode'
import { useSearchParams } from "react-router-dom";

function RedirectPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [tokenData, setTokenData] = useState();
  const params_code = searchParams.get("code");
  const params_state = searchParams.get("state");
  console.log("data found", params_code, params_state);

  useEffect(() => {
    const processTokensAndKeys = async () => {
      const tokenData = await getTokens();
      const decoded = jwt(tokenData.access_token);

      console.log("token decoded", decoded);
    };

    processTokensAndKeys();
  }, []);

  const getTokens = async () => {
    const base64clientSecret = window.btoa(
      `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`
    );
    const TOKEN_URL = `${process.env.REACT_APP_BASE_URL}/v1/${process.env.REACT_APP_AUTHSERVERID}/token`;
    const postOptions = {
      method: "POST",
      url: TOKEN_URL,
      data: {
        grant_type: "authorization_code",
        redirect_uri: process.env.REACT_APP_CODE_REDIRECT_URI,
        code: params_code,
      },
      headers: {
        authorization: `Basic ${base64clientSecret}`,
        accept: "application/json",
        "content-type": "application/json",
      },
    };

    const tokenResponse = await axios(postOptions);
    setTokenData(tokenResponse.data);
    console.log("token data", tokenResponse.data);

    localStorage.setItem("EMCS_TOKEN", JSON.stringify(tokenResponse.data));
    return tokenResponse.data;
  };

  const getKeys = async () => {
    const getOptions = {
      method: "get",
      url: "https://preview.enterprise-auth.vip.nordstrom.com/v1/default/keys",
    };
    const keysResponse = await axios(getOptions);
    localStorage.setItem("EMCS_KEYS", JSON.stringify(keysResponse.data.keys));
    return keysResponse.data.keys;
  };

  return <div>Hi I am redirect page</div>;
}

export default RedirectPage;
