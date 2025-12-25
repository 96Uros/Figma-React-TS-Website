import './Navbar.css';
import { menuIcon, menuCloseIcon } from '../../assets';
import { useState } from 'react';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound<span className="red">DZign</span>
        </a>

        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div onClick={() => setIsActive(true)} className="menu-icon">
          <img src={menuIcon} alt="Menu" />
        </div>
      </nav>

      <div
        className={`mobile-menu-container ${isActive ? 'mobile-menu-container-active' : ''}`}
      >
        <div
          onClick={() => setIsActive(false)}
          className="close-icon"
        >
          <img src={menuCloseIcon} alt="Close" />
        </div>

        <ul className="menu-items">
          <li>
            <a href="#" onClick={() => setIsActive(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#topics" onClick={() => setIsActive(false)}>
              Course Details
            </a>
          </li>
          <li>
            <a href="#blog" onClick={() => setIsActive(false)}>
              Blog
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={() => setIsActive(false)}
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
