import "./styles/Career.css";
import { userInfo } from "../data/user_info";

const Awards = () => {
  return (
    <div className="career-section section-container" id="awards">
      <div className="career-container">
        <h2>
          Awards <span>&</span>
          <br /> Honors
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {userInfo.awards.map((award, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{award.split(",")[0]}</h4>
                  <h5>{award.split(",").slice(1).join(",")}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
