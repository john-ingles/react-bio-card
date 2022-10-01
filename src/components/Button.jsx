import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Buttons() {
  return (
    <div className="buttons">
      <a href="mailto: john.kenneth.ingles@gmail.com">
        <div className="button-container-email">
          <FontAwesomeIcon
            className="buttons--envelope-icon"
            icon={faEnvelope}
          />
          <div className="buttons--email">Email</div>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/john-ingles/">
        <div className="button-container-linkedin">
          <FontAwesomeIcon
            className="buttons--linkedin-icon"
            icon={faLinkedin}
          />
          <div className="buttons--linkedin">LinkedIn</div>
        </div>
      </a>
    </div>
  );
}
