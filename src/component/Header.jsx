import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvder";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const HandleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>

        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={HandleLogOut} className="btn btn-xs">
              SingOut
            </button>
          </>
        ) : (
          <Link to={"/login"}>login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
