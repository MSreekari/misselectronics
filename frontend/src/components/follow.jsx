import './follow.css';
import facebook from '../assets/Facebook.png';
import instagram from '../assets/Instagram.png';
import linkedin from '../assets/Linkedin.png';
import youtube from '../assets/Youtube.png';
import X from '../assets/X.png';
// import medium from '../assets/Medium.png';

export default function Follow() {
  return (
    <div className="follow-content-section-wrapper">
      <div className="follow-container">
      <span>Follow</span>
      <button className='icom-wrapper'><img src={X} className="social-icon" alt="Twitter" onClick={() => {
        window.open(
          'https://x.com/misselectro1729',
          '_blank'
        );
      }}/></button>
      <button className='icom-wrapper'><img src={facebook} className="social-icon" alt="Facebook" /></button>
    <button
      className='icom-wrapper'
      onClick={() => {
        window.open(
          'https://www.instagram.com/miss_electronics/',
          '_blank'
        );
      }}
    >
      <img src={instagram} className="social-icon" alt="Instagram" />
    </button>
      <button className='icom-wrapper'><img src={linkedin} className="social-icon" alt="LinkedIn" onClick={() =>
    window.open(
      'https://www.linkedin.com/company/miss-my-internet-smart-systems/',
      '_blank'
    )
  }/></button>
      {/* <button className='icom-wrapper'><img src={medium} className="social-icon" alt="Medium" /></button> */}
      <button className='icom-wrapper'><img src={youtube} className="social-icon" alt="YouTube" onClick={() =>
    window.open(
      'https://www.youtube.com/@miss_electronics',
      '_blank'
    )
  }/></button>
    </div>
    </div>
  );
}
