import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { userInfo } from "../data/user_info";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${userInfo.contact.email}`} data-cursor="disable">
                {userInfo.contact.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href={`tel:${userInfo.contact.phone.replace(/\s/g, "")}`} data-cursor="disable">
                {userInfo.contact.phone}
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={userInfo.socials.github}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={userInfo.socials.linkedin}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={userInfo.socials.orcid}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              ORCID <MdArrowOutward />
            </a>
            <a
              href={userInfo.socials.huggingface}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Hugging Face <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              AI Researcher <br /> <span>{userInfo.name}</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
