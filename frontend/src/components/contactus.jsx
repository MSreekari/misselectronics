import { React, useState } from 'react'
import { Dot, ArrowRight, UserRound, Phone, Mail, HandCoins } from 'lucide-react'
import './contactus.css'
import Follow from './follow';

const Contactus = () => {
  const [isB2B, setIsB2B] = useState(false);
  return (
    <div className="contactus" id='contact'>
      <div className="b2b-wrapper">
        <button className="b2b-btn" onClick={() => setIsB2B(!isB2B)}>
        <span className="dot-background"></span>
        <span className="btn-content">
          {isB2B ? (
            <>
              Go Back <ArrowRight className="arrow-icon" />
            </>
          ) : (
            <>
              For B2B <ArrowRight className="arrow-icon" />
            </>
          )}
        </span>
        </button>
      </div>
      <div className="layer">
        <div className="details">
          <h2>Contact Us</h2>
          <p className='details-line1'>Email, call or complete the form to book a service. We're here to help you with smart solutions tailored to your needs - reach out anytime.</p>
          <a className='email' href="#">misselectronics@gmail.com</a>
          <p className='phone-number'>9122133455</p>
          <p className='c-support'>Unable to find what you're looking for? Click Here <a className='customer-support' href='#'>Customer Support</a></p>
          <Follow />
        </div>
        <div className="form-container">
          {isB2B ? (
  <form>
    <p className='form-heading'>Please fill this form</p>
    <div className="name">
      <div className="input-wrapper">
      <input type="text" placeholder="Enter company name" />
      <span className="input-icon"><UserRound /></span>
    </div>
    <div className="input-wrapper">
      <input type="text" placeholder="Enter contact person" />
      <span className="input-icon"><UserRound /></span>
    </div>
    </div>
    <div className="input-wrapper">
      <input type="tel" placeholder="Enter phone number" />
      <span className="input-icon"><Phone /></span>
    </div>
    <div className="input-wrapper">
      <input type="email" placeholder="Enter email" />
      <span className="input-icon"><Mail /></span>
    </div>
    <div className="input-wrapper">
      <input type="text" placeholder="Mention your requirement" />
      <span className="input-icon"><HandCoins /></span>
    </div>
    <button className="submit-btn" type="submit">Submit</button>
  </form>
) : (
  <form>
    <p className='form-heading'>Please fill this form</p>
    <div className="name">
      <div className="input-wrapper">
        <input type="text" placeholder="Enter first name" />
        <span className="input-icon"><UserRound /></span>
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter last name" />
        <span className="input-icon"><UserRound /></span>
      </div>
    </div>
    <div className="input-wrapper">
      <input type="tel" placeholder="Enter phone number" />
      <span className="input-icon"><Phone /></span>
    </div>
    <div className="input-wrapper">
      <input type="email" placeholder="Enter email" />
      <span className="input-icon"><Mail /></span>
    </div>
    <div className="input-wrapper">
      <span className="input-icon"><HandCoins /></span>
      <select name="service" id="service">
        <option value="">Select a service</option>
        <option value="Smart Garden Automation">Smart Garden Automation</option>
        <option value="Smart Attedance System">Smart Attedance System</option>
        <option value="Smart Home Automation">Smart Home Automation</option>
        <option value="Technical Support">Technical Support</option>
      </select>
    </div>
    <button className="submit-btn" type="submit">Submit</button>
  </form>
)}
        </div>
      </div>
    </div>
  );
}

export default Contactus