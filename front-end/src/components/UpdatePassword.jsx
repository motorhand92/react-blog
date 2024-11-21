import { useState, useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const UpdatePassword = () => {
  const userId = useSelector((state) => state.auth.userId);

  const updatePasswordText = useRef();

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
    async function update() {
      const updatePasswordValue = updatePasswordText.current.value;
      if (window.confirm(`Your new password will be ${updatePasswordValue}. Are you sure with your password?`)) {
        const response = await axios.put(`/api/users/${userId}/password`, { password: updatePasswordValue });
        const updatedUserInfo = response.data;
        updateUsers(updatedUserInfo);
        alert("Password updated!");
      }
    }

    return (
      <div className="account-content">
        <h3>Update Bio</h3>
        <h4>Write your new password</h4>
        <input ref={updatePasswordText} type="password" className="account-title" />
        <button onClick={update} className="account-button">
          Update
        </button>
      </div>
    );
  }
};

export default UpdatePassword;
