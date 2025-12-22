
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./Navbar.css";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const { user, SignOutFromApp } = useContext(AuthContext);

  return (
    <header className="navbar">
      <nav className="navbar-container">
        {/* LEFT : Logo only */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            SkillSwap
          </Link>
        </div>

        {/* RIGHT : everything else */}
        <div className="navbar-right">
          {/* Navigation links */}
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/profile">My Profile</Link>
          </div>

          {/* Logged out */}
          {!user && (
            <>
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Signup
              </Link>
            </>
          )}

          {/* Logged in */}
          {user && (
            <div className="navbar-user">
              <img
                src={user?.photoURL}
                alt="avatar"
                className="avatar"
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user?.displayName}
              />

              <Tooltip id="user-tooltip" place="bottom" />

              <button
                type="button"
                 onClick={() => {
                    SignOutFromApp();
                  }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
