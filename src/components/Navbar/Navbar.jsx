import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        Sound<span className="red">DZign</span>
      </a>

      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Course Details</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
      </ul>
    </nav>
  );
}
