import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer--brand-icons">
      <a href="#">
        <FontAwesomeIcon className="icon" icon={faSquareTwitter} />
      </a>
      <a href="#">
        <FontAwesomeIcon className="icon" icon={faSquareFacebook} />
      </a>
      <a href="#">
        <FontAwesomeIcon className="icon" icon={faSquareInstagram} />
      </a>
      <a href="https://github.com/john-ingles">
        <FontAwesomeIcon className="icon" icon={faSquareGithub} />
      </a>
    </div>
  );
}
