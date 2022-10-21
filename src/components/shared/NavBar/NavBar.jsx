import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className=" navbar bg-base-100 border mb-5 flex justify-between px-5">
      <div className="container mx-auto flex justify-between ">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
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
              <Link>Item 1</Link>
            </li>
            <li>
              <Link className="justify-between">Parent</Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          {user?.uid ? (
            <div className="flex items-center">
              <li>
                <Link onClick={logOut}>SignOut</Link>
              </li>
              <div className="flex items-center gap-2 text-info">
                {user.photoURL ? (
                  <div className="avatar">
                    <div className="w-6 rounded-full">
                      <img src={user.photoURL} alt="" />
                    </div>
                  </div>
                ) : (
                  <FaUser />
                )}
                <li className="">{user.displayName}</li>
              </div>
            </div>
          ) : (
            <li>
              <Link to="/login">SignIn</Link>
              <Link to="/signup">SignUp</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
