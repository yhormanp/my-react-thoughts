import React, { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Initial() {
  const [contextMessage, setContextMessage] = useState(
    "Validating credentials"
  );
//   const baseUrl = "https://preview.enterprise-auth.vip.nordstrom.com";
//   const authServerId = "default";
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("params received", searchParams.get("code"));
  console.log("params received", searchParams.get("code1"));
  console.log("all paramas", searchParams);
//   const nAuthClientId = "0oa15ptbb07z1IgWy0h8";
  const response_type = "code";
//   const redirect_uri = "http://localhost:3000/redirect";
  const state_number = "8600b31f52d14dca987c";
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const authServerId= process.env.REACT_APP_AUTHSERVERID;
  const nAuthClientId= process.env.REACT_APP_NAUTHCLIENTID;
  const redirect_uri = process.env.REACT_APP_CODE_REDIRECT_URI;

  const URL_AUTHORIZE = `${baseUrl}/v1/${authServerId}/authorize`;
  const URL_AUTHORIZE_MOD = `${URL_AUTHORIZE}?client_id=${nAuthClientId}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=openid&state=${state_number}`;

  if (searchParams.get("code") !== null && searchParams.get("state") !== null) {
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    console.log("data found", code, state);
  } else {
    // redirect the user to the login page

    setContextMessage("you are not logged, you will be redirected");
    setTimeout(() => {
      window.location.assign(URL_AUTHORIZE_MOD);
    }, 1500);
  }

  //   const nAuthAuthenticateUrl =
  //     "https://preview.enterprise-auth.vip.nordstrom.com/v1/ausg0zujx3faqpGaA0h7/authorize";
  //   const nAuthClientId = "0oa15ptbb07z1IgWy0h8";
  //   const response_type = "code";
  //   const redirect_uri = "http://localhost:3000/redirect";
  //   const state_number = "8600b31f52d14dca987c";

  //   const createRequest = async () => {
  //     const URL_AUTHORIZE = `${baseUrl}/v1/${authServerId}/authorize`;
  //     const URL_AUTHORIZE_MOD = `${URL_AUTHORIZE}?client_id=${nAuthClientId}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=openid&state=${state_number}`;
  //     // const params = { headers: { "Access-Control-Allow-Origin": "*" } };

  //     const config = {
  //       url: URL_AUTHORIZE_MOD,
  //       method: "GET",
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Headers":
  //           "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
  //         "Content-Type": "application/json",
  //       },
  //     };

  //     // const instance = axios.create({
  //     //     baseURL: URL_AUTHORIZE_MOD,
  //     //     withCredentials: false,
  //     //     headers: {
  //     //       'Access-Control-Allow-Origin' : '*',
  //     //       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //     //       }
  //     //   });

  //     const response = await axios(config);

  //     console.log("this is the response", response);
  //   };

  return (
    <div>
      <h1> {contextMessage}</h1>
      {/* <button on> Loggin on nauth</button> */}
    </div>
  );
}

export default Initial;
