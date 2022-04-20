import React, { useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
function OauthContainer() {
  const [showLoginButton, setShowLoginButton] = useState(true);
  const clientID =
    "193915089766-vabns34tk1ffuoliebpcjd8ip0btaq6q.apps.googleusercontent.com";

  const responseGoogle = (response) => {
    console.log("response", response);
    console.log(response.profileObj);
    setShowLoginButton(false);
  };

  const onFailResponseGoogle = (response) => {
    console.log("login failes:", response);
  };

  const onSignoutSucess = () => {
    alert("you have been signed out successfully");
    setShowLoginButton(true);
  };

  return (
    <div>
      {showLoginButton ? (
        <GoogleLogin
          clientId={clientID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={onFailResponseGoogle}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      ) : (
        <GoogleLogout
          clientId={clientID}
          buttonText="Logout"
          onLogoutSuccess={onSignoutSucess}
        ></GoogleLogout>
      )}
    </div>
  );
}

export default OauthContainer;
