import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.userId);

  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  return (
    <div className="navbar-wrap">
      <nav className="navbar">
        <ul>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            <li>Home</li>
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/about">
            <li>About</li>
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/articles">
            <li>Articles</li>
          </Link>
          {isAuthenticated === true && (
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/account">
              <li>Account</li>
            </Link>
          )}
        </ul>
        {isAuthenticated === false && (
          <Link to="/signin">
            <button style={{ height: "100%" }}>Sign in</button>
          </Link>
        )}
        {isAuthenticated === true && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <h4 style={{ height: "50%", margin: "0 15px 0 0" }}>Hello, {userId}</h4>
            <button onClick={handleSignOut} style={{ height: "100%" }}>
              Sign Out
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
