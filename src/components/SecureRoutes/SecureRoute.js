import Login from "./Login";
import { Navigate, Outlet } from "react-router-dom";
import useSecurity from "./UseSecurity";

const SecureRoute = ({Component}) => {
  const { loggedIn } = useSecurity();

  //   return <Route {...props}>{loggedIn ? props.children : <Login />}</Route>;
  return loggedIn ? <Component /> : <Navigate to="/login"></Navigate>;
};

export default SecureRoute;
