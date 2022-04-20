import React from "react";

function Header({ app }) {
  return (
    <div>
      <h1>{app.title}</h1>
      <h3>{app.profileMenuData}</h3>
    </div>
  );
}

export default Header;
