import './Header.css';
import Navbar from '../Navbar/Navbar';

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="cta">
          <p className="course-name">Sounds Design Masterclass</p>
          <h1>Learn the Art of Sound Design</h1>
          <a href="#" className="demo-btn">
            Demo-lesson
          </a>
        </div>
      </div>
    </header>
  );
}
