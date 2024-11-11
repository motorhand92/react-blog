import { useSelector, useDispatch } from "react-redux";
import { updateBio } from "../features/bioSlice";
import { useRef } from "react";

const UpdateBio = () => {
  const updateBioText = useRef();

  const bio = useSelector((state) => state.bio.bioText);
  const dispatch = useDispatch();

  function update() {
    const updateBioValue = updateBioText.current.value;
    dispatch(updateBio(updateBioValue));
  }
  return (
    <div className="account-content">
      <h3>Update Bio</h3>
      <div>
        <h4>Current Bio</h4>
        <p>{bio}</p>
      </div>
      <textarea ref={updateBioText} type="text" className="account-input" />
      <button onClick={update} className="account-button">
        Update
      </button>
    </div>
  );
};

export default UpdateBio;
