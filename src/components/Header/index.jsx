import { assets } from '../../assets/assets'
import './index.css'

const Header = () => {
  return (
    <div className='header my-4'>
      <div className="container position-relative">
        <img className='w-100' src={assets.header_img} alt="header image" />
        <div className="header-content position-absolute d-flex flex-column align-items-start text-white animate__animated animate__fadeIn">
          <h2>Order your favourite food here</h2>
          <p className='mb-0 d-none d-lg-block'>
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experties. Our mission is to satisfy your cravings and elevate your dining experience. one delicious meal at a time.
          </p>
          <button className='btn bg-white rounded-pill'>View Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Header