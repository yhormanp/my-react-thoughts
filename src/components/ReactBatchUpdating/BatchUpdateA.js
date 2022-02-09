import React, { useEffect, useState } from "react";

function BatchUpdateA() {
  const [name, setName] = useState();
  const [roles, setRoles] = useState();
  const [rolesList, setRolesList] = useState();
  const [renderCount, setRenderCount] = useState(0);

  const fetchData = () => {
    return fetch("user.json").then((resp) => resp.json());
  };

  useEffect(() => {
    setRenderCount(renderCount + 1);
  }, [name, roles, rolesList]);

  const onLoadUser = async () => {
    const data = await fetchData();
    setName(`${data[0].name}${renderCount}`);
    setRoles(data[0].roles);
    setRolesList(
      Object.keys(data[0].roles).filter((k) => data[0].roles[k] === true)
    );
  };

  return (
    <div>
      <label>Name: {name}</label>
      <label>Roles: {JSON.stringify(roles)}</label>
      <label>Roles List: {JSON.stringify(rolesList)}</label>
      <button onClick={() => onLoadUser()}>Get User</button>
      <label> Component was rendered {renderCount} times </label>
    </div>
  );
}

export default BatchUpdateA;
