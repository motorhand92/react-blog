import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function SigninPage() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const users = useSelector((state) => state.user);

  const usernameText = useRef();
  const passwordText = useRef();
  const navigate = useNavigate();

  const handleSignIn = (user) => {
    dispatch(signIn(user));
  };

  const [users, updateUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("/api/users");
      const usersInfo = response.data;
      updateUsers(usersInfo);
    };
    loadUsers();
  }, []);

  if (users.length > 0) {
    function submit() {
      const username = usernameText.current.value;
      const pass = passwordText.current.value;
      const userFnd = users.find((user) => user.userId === username);

      if (userFnd && !isAuthenticated) {
        if (pass === userFnd.password) {
          alert("Successfully signed in!");
          handleSignIn(userFnd.userId);
          navigate("/");
        } else {
          alert("Password is wrong!");
        }
      } else {
        alert("There isn't any matching user! If you haven't signed up yet, please sign up!");
      }
    }

    function submitEnter(event) {
      if (event.keyCode === 13) {
        const username = usernameText.current.value;
        const pass = passwordText.current.value;
        const userFnd = users.find((user) => user.userId === username);

        if (userFnd && !isAuthenticated) {
          if (pass === userFnd.password) {
            alert("Successfully signed in!");
            handleSignIn(userFnd.userId);
            navigate("/");
          } else {
            alert("Password is wrong!");
          }
        } else {
          alert("There isn't any matching user! If you haven't signed up yet, please sign up!");
        }
      }
    }

    // sendData(user);

    return (
      <div className="content-wrap">
        <div className="content">
          <img
            src="https://cdn4.iconfinder.com/data/icons/digital-marketing-gradient-rave-and-glow/512/Privacy-512.png"
            alt=""
            style={{ width: "100px" }}
          />
          <h5>Please enter your username and password</h5>
          <h3>Username</h3>
          <input ref={usernameText} type="text" style={{ height: "25px", marginBottom: "20px", padding: "0 20px" }} />
          <h3>Password</h3>
          <input
            ref={passwordText}
            type="password"
            onKeyDown={submitEnter}
            style={{ height: "25px", padding: "0 20px" }}
          />
          <button onClick={submit} style={{ height: "40px", margin: "50px" }}>
            Sign In
          </button>
          <h3>If you don't have a user, please sign up!</h3>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SigninPage;
