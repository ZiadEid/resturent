import './index.css'
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer d-flex flex-column align-items-center gap-3 mt-5 pt-5' id='footer'>
      <div className="container">
        <div className="footer-content d-flex flex-wrap justify-content-between w-100">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="footer-left d-flex flex-column align-items-start gap-3 pb-5">
                <img src={assets.logo} alt="logo" />
                <p className='mb-0'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim et est inventore, maiores voluptatum saepe fugiat, error deleniti harum quasi quisquam corporis, doloremque officiis. Facilis veritatis ex eos quidem nemo?
                </p>
                <div className="social-icons">
                  <img className='me-3' src={assets.facebook_icon} alt="facebook" />
                  <img className='me-3' src={assets.twitter_icon} alt="twitter" />
                  <img src={assets.linkedin_icon} alt="linkedin" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer-center d-flex flex-column align-items-start gap-3 pb-5">
                <h2 className='text-white'>Company</h2>
                <ul className="mb-0 ps-0 text-start">
                  <li className='list-unstyled mb-2'>Home</li>
                  <li className='list-unstyled mb-2'>About us</li>
                  <li className='list-unstyled mb-2'>Delivery</li>
                  <li className='list-unstyled mb-2'>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer-right d-flex flex-column align-items-start gap-3">
                <h2 className='text-white'>Get in touch</h2>
                <ul className="mb-0 ps-0 text-start">
                  <li className='list-unstyled mb-2'>+201060536977</li>
                  <li className='list-unstyled mb-2'>ziad@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='w-100 mx-0' />
        <div className="copy-right d-flex align-items-center justify-content-center">
          <p className='text-center'>Copyright 2024 © <span>Tomato</span>.com - All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer