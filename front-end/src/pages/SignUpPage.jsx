import { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const usernameText = useRef();
  const passwordText = useRef();
  const avatarText = useRef();
  const navigate = useNavigate();

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
      const avatarUrlValue = avatarText.current.value;
      const user = users.find((user) => user.userId === username);
      if (user) {
        alert("You are already a member of blog team!");
      } else {
        async function signUp() {
          const response = await axios.post("/api/users/new", {
            userId: username,
            password: pass,
            userAvatar: avatarUrlValue,
            title: "user",
          });
          const updatedUser = response.data;
          updateUsers(updatedUser);
        }
        signUp();
        if (window.confirm("Are you sure with your username and password?")) {
          alert("Succesfully signed up!");
          navigate("/signin");
        } else {
          alert("Re-routing to sign up page!");
          navigate("/signup");
        }
      }
    }

    return (
      <div className="content-wrap">
        <div className="content">
          <img
            src="https://cdn4.iconfinder.com/data/icons/digital-marketing-gradient-rave-and-glow/512/Privacy-512.png"
            alt=""
            style={{ width: "100px" }}
          />
          <h5>Please enter a username and a password</h5>
          <h3>Username</h3>
          <input ref={usernameText} type="text" style={{ height: "25px", marginBottom: "20px", padding: "0 20px" }} />
          <h3>Password</h3>
          <input
            ref={passwordText}
            type="password"
            style={{ height: "25px", marginBottom: "20px", padding: "0 20px" }}
          />
          <h3>Avatar Url</h3>
          <input ref={avatarText} type="text" style={{ height: "25px", padding: "0 20px" }} />
          <button onClick={submit} style={{ height: "40px", margin: "50px" }}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
};

export default SignUpPage;
