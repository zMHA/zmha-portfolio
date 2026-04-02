import "./styles/About.css";
import { userInfo } from "../data/user_info";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">{userInfo.about}</p>
      </div>
    </div>
  );
};

export default About;
