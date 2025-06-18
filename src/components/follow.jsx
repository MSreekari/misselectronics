import './follow.css';
import facebook from '../assets/Facebook.png';
import instagram from '../assets/Instagram.png';
import linkedin from '../assets/Linkedin.png';
import youtube from '../assets/Youtube.png';
import X from '../assets/X.png';
import medium from '../assets/Medium.png';

export default function Follow() {
  return (
    <div className="follow-container">
      <span>Follow</span>
      <button className='icom-wrapper'><img src={X} className="social-icon" alt="Twitter" /></button>
      <button className='icom-wrapper'><img src={facebook} className="social-icon" alt="Facebook" /></button>
      <button className='icom-wrapper'><img src={instagram} className="social-icon" alt="Instagram" /></button>
      <button className='icom-wrapper'><img src={linkedin} className="social-icon" alt="LinkedIn" /></button>
      <button className='icom-wrapper'><img src={medium} className="social-icon" alt="Medium" /></button>
      <button className='icom-wrapper'><img src={youtube} className="social-icon" alt="YouTube" /></button>
    </div>
  );
}
