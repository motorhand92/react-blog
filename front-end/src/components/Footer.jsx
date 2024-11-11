import { Link } from "react-router-dom";
import githubLogo from "../assets/github.png";

function Footer() {
  return (
    <footer>
      <div>
        <h5>Designed by MK</h5>
      </div>
      <div>
        <Link to="https://github.com/motorhand92">
          <img src={githubLogo} alt="github logo"></img>
        </Link>
        <Link to="https://www.linkedin.com/in/mert-kuldemir-980853a0/">
          <img
            src="https://cdn-icons-png.freepik.com/512/3536/3536505.png?ga=GA1.1.2109177720.1716898140"
            alt="linkedin logo"
          />
        </Link>
        <Link to="https://www.instagram.com/mertkuldemir/">
          <img
            src="https://cdn-icons-png.freepik.com/512/2111/2111463.png?ga=GA1.1.2109177720.1716898140"
            alt="instagram logo"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
