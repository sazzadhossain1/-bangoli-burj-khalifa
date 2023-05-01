import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("LogOut successfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className=" nav-div bg-primary">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>

              <li>
                <Link to="/signUp">SignUp</Link>
              </li>

              {user?.uid ? (
                <button onClick={handleLogOut} className="mr-5  text-2xl">
                  LogOut
                </button>
              ) : (
                <li tabIndex={0}>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          <Link to="/home" className="btn btn-ghost normal-case text-2xl">
            BANGOLI BURJ KHALIFA
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="mr-5 text-2xl" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="mr-5 text-2xl" to="/branches">
                Our Branches
              </Link>
            </li>
            <li>
              <Link className="mr-5 text-2xl" to="/offers">
                Offers
              </Link>
            </li>

            {user?.uid ? (
              <button onClick={handleLogOut} className="mr-5  text-2xl">
                LogOut
              </button>
            ) : (
              <>
                <li>
                  <Link className="mr-5  text-2xl" to="/signUp">
                    SignUp
                  </Link>
                </li>
                <li tabIndex={0}>
                  <Link className="mr-5 text-2xl" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
          <h1>{user?.displayName}</h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
