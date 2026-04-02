import "./styles/Career.css";
import { userInfo } from "../data/user_info";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {/* Experience Section */}
          {userInfo.experience.map((exp, index) => (
            <div className="career-info-box" key={`exp-${index}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.organization}</h5>
                </div>
                <h3>{exp.duration.includes("Present") ? "NOW" : exp.duration.split(" – ")[1]?.split(" ")[1] || exp.duration}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}

          {/* Education Section */}
          {userInfo.education.map((edu, index) => (
            <div className="career-info-box" key={`edu-${index}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                </div>
                <h3>{edu.duration.split(" – ")[1]?.split(" ")[1] || edu.duration}</h3>
              </div>
              <p>
                CGPA: {edu.cgpa} <br />
                {edu.thesis && (
                  <>
                    <strong>Thesis:</strong> {edu.thesis.title} <br />
                    <em>{edu.thesis.summary}</em>
                  </>
                )}
                {edu.academicProject && (
                  <>
                    <strong>Academic Project:</strong> {edu.academicProject}
                  </>
                )}
              </p>
              {edu.website && (
                <a href={edu.website} target="_blank" rel="noopener noreferrer" className="career-link">
                  Visit Institution
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
