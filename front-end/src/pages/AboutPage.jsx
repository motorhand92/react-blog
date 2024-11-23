import { useState, useEffect } from "react";
import axios from "axios";

function AboutPage() {
  const [bio, updateBio] = useState();

  useEffect(() => {
    async function getBio() {
      const response = await axios.get("/api/bio");
      const bioInfo = response.data[0];
      updateBio(bioInfo);
    }
    getBio();
  });

  if (bio) {
    return (
      <div className="content-wrap">
        <div className="content">
          <h1>About Me</h1>
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQGslbbDBOPdUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1632840108846?e=1735776000&v=beta&t=VG2Drj0IkJyY_8qXNh0Y4jrxOONj8xRFgO-CjAYUDP8"
            alt=""
            style={{ width: "300px" }}
          />
          {bio.bioText.map((paragraph) => (
            <p key={paragraph.id}>{paragraph.text}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default AboutPage;
