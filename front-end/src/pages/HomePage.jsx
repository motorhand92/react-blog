import LastContent from "../components/LastContent";
import { useSelector } from "react-redux";

function HomePage() {
  const bio = useSelector((state) => state.bio.bioText);

  return (
    <>
      <div className="bio-wrap">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQGslbbDBOPdUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1632840108846?e=1735776000&v=beta&t=VG2Drj0IkJyY_8qXNh0Y4jrxOONj8xRFgO-CjAYUDP8"
          alt="avatar"
          style={{ width: "300px" }}
        />
        <h3>Welcome to my blog!</h3>
        <p>{bio}</p>
      </div>
      <LastContent />
    </>
  );
}

export default HomePage;
