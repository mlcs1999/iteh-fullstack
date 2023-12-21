import React from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

const NavBar = ({ token }) => {
  function handleLogout() {
    let config = {
      method: "post",
      url: "api/logout",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("auth_token", null);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Blog App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/posts">
              All posts
            </a>
            {token == null ? (
              <a className="nav-item nav-link" href="/login">
                Login
              </a>
            ) : (
              <a className="nav-item nav-link" href="/" onClick={handleLogout}>
                Logout
              </a>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
