import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { SiOrcid, SiHuggingface } from "react-icons/si";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { userInfo } from "../data/user_info";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href={userInfo.socials.github} target="_blank" rel="noopener noreferrer">
            <FaGithub title="GitHub" />
          </a>
        </span>
        <span>
          <a href={userInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn title="LinkedIn" />
          </a>
        </span>
        <span>
          <a href={userInfo.socials.orcid} target="_blank" rel="noopener noreferrer">
            <SiOrcid title="ORCID" />
          </a>
        </span>
        <span>
          <a href={userInfo.socials.huggingface} target="_blank" rel="noopener noreferrer">
            <SiHuggingface title="Hugging Face" />
          </a>
        </span>
      </div>
      <a className="resume-button" href={`mailto:${userInfo.contact.email}`}>
        <HoverLinks text="CONTACT" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
