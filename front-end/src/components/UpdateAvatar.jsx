import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
// import { updateAvatar } from "../features/userSlice";
import { useRef } from "react";

const UpdateAvatar = () => {
  // const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const avatarUrlText = useRef();

  const [users, updateUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("/api/users");
      const usersInfo = response.data;
      updateUsers(usersInfo);
    };
    loadUsers();
  });

  if (users.length > 0) {
    const user = users.find((user) => user.userId === userId);

    // const index = users.findIndex((a) => a === user);

    async function updateAv() {
      const avatarUrlValue = avatarUrlText.current.value;
      const response = await axios.put(`/api/users/${userId}/avatar`, { userAvatar: avatarUrlValue });
      const updatedAvatar = response.data;
      updateUsers(updatedAvatar);
      console.log(user.userAvatar);
      // dispatch(updateAvatar([index, avatarUrlValue]));
    }

    return (
      <div className="account-content">
        <h3>Change Avatar</h3>
        <h4>Current Avatar</h4>
        <img src={user.userAvatar} alt="" />
        <h4>Avatar URL</h4>
        <input ref={avatarUrlText} type="text" className="account-title" />
        <button className="account-button" onClick={updateAv}>
          Change
        </button>
      </div>
    );
  }
};

export default UpdateAvatar;
