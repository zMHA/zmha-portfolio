import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { userInfo } from "../data/user_info";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MUHAMMAD
              <br />
              <span>HASNAIN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>AI Researcher</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">NLP Engineer</div>
              <div className="landing-h2-2">Deep Learning Practitioner</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Deep Learning Practitioner</div>
              <div className="landing-h2-info-1">NLP Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
