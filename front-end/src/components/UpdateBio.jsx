import { useState, useEffect } from "react";
// import { updateBio } from "../features/bioSlice";
import { useRef } from "react";
import axios from "axios";

const UpdateBio = () => {
  const updateBioText = useRef();

  const [bio, updateBio] = useState();

  useEffect(() => {
    async function getBio() {
      const response = await axios.get("/api/bio");
      const bioInfo = response.data;
      updateBio(bioInfo);
    }
    getBio();
  });

  // const dispatch = useDispatch();

  async function update() {
    const updateBioValue = updateBioText.current.value;
    const response = await axios.put("/api/bio/bioSum", { bioSum: updateBioValue });
    const updatedBioInfo = response.data;
    updateBio(updatedBioInfo);
  }

  if (bio) {
    return (
      <div className="account-content">
        <h3>Update Bio</h3>
        <div>
          <h4>Current Bio</h4>
          <p>{bio.bioSum}</p>
        </div>
        <textarea ref={updateBioText} type="text" className="account-input" />
        <button onClick={update} className="account-button">
          Update
        </button>
      </div>
    );
  }
};

export default UpdateBio;
