import './Footer.css';
import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
} from '../../assets';

export default function Footer() {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound<span className="red">DZign</span>
            </a>
            <div className="social-icons">
              <a href="#">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
            <div className="copyright">
              This website is designed by GTCoding Ⓒ 2025
            </div>
          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">contact@email.com</a>
              </li>
              <li>
                <a href="#">+1 999 9999 999</a>
              </li>
            </ul>
          </div>
          <div className="copyright mobile">
            This website is designed by GTCoding Ⓒ 2025
          </div>
        </div>
      </div>
    </footer>
  );
}
