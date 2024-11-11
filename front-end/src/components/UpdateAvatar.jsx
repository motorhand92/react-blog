import { useSelector, useDispatch } from "react-redux";
import { updateAvatar } from "../features/userSlice";
import { useRef } from "react";

const UpdateAvatar = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const users = useSelector((state) => state.user.users);
  const user = users.find((user) => user.userId === userId);

  const index = users.findIndex((a) => a === user);
  const avatarUrlText = useRef();

  function updateAv() {
    const avatarUrlValue = avatarUrlText.current.value;
    dispatch(updateAvatar([index, avatarUrlValue]));
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
};

export default UpdateAvatar;
