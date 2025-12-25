import './Info.css';
import { infoVideo1, infoStudent1, bgElement2 } from '../../assets';

export default function Info() {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={infoStudent1} alt="Video" />
            <div className="amount">23,000+</div>
            <div className="text">Students</div>
          </div>
          <div className="info-content">
            <img src={infoVideo1} alt="Video" />
            <div className="amount">26 Hrs</div>
            <div className="text">Video Content</div>
          </div>
        </div>
        <img
          src={bgElement2}
          alt="Background"
          className="bgElement2"
        />
      </div>
    </section>
  );
}
