import React from "react";
import { useSearchParams } from "react-router-dom";

function NordstromLogin() {
  const [searchParams] = useSearchParams();

  const response_type = "code";
  const state_number = "8600b31f52d14dca987c";

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const authServerId = process.env.REACT_APP_AUTHSERVERID;
  const nAuthClientId = process.env.REACT_APP_NAUTHCLIENTID;
  const redirect_uri = process.env.REACT_APP_CODE_REDIRECT_URI;
  const scope = process.env.REACT_APP_AUTH_SCOPE;
  const URL_AUTHORIZE = `${baseUrl}/v1/${authServerId}/authorize`;
  const URL_AUTHORIZE_MOD = `${URL_AUTHORIZE}?client_id=${nAuthClientId}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&state=${state_number}`;

  if (searchParams.get("code") !== null && searchParams.get("state") !== null) {
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    console.log("data found", code, state);
  } else {
    // redirect the user to the login page

    window.location.assign(URL_AUTHORIZE_MOD);
  }

  return <div>Welcome, validating your credentials</div>;
}

export default NordstromLogin;
