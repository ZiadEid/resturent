import './index.css'
import { assets } from '../../assets/assets';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState('home');
  const {getCartTotal} = useContext(StoreContext);

  return (
    <div className='navbar py-4'>
      <div className="container">
        <Link to='/'>
          <img className='logo' src={assets.logo} alt="logo" />
        </Link>
        <ul className="navbar-menu d-none d-md-flex list-unstyled gap-4 mb-0">
          <Link to='/' className='text-decoration-none'>
            <li onClick={() => setMenu('home')}
              className={menu == 'home' ? 'active' : ''}
            >
              Home
            </li>
          </Link>
          <a href="#exploreMenu" className='text-decoration-none'>
            <li onClick={() => setMenu('menu')} className={menu == 'menu' ? 'active' : ''}>Menu</li>
          </a>
          <a href="#appDownload" className='text-decoration-none'>
            <li onClick={() => setMenu('mobile-app')}
              className={menu == 'mobile-app' ? 'active' : ''}
            >
              Mobile-app
            </li>
          </a>
          <a href="#footer" className='text-decoration-none'>
            <li onClick={() => setMenu('contact-us')}
              className={menu == 'contact-us' ? 'active' : ''}
            >
              Contant Us
            </li>
          </a>
        </ul>
        <div className="navbar-right d-flex justify-content-center align-items-center">
          <img src={assets.search_icon} alt="search icon" />
          <div className="navbar-baskit-icon position-relative">
            <Link to='/cart'>
              <img src={assets.basket_icon} alt="basket icon" />
            </Link>
            {
              getCartTotal() > 0 ?
              <div className="dot position-absolute rounded-circle"></div>
              : ''
            }
          </div>
          <button onClick={() => setShowLogin(prev => prev = true)} className='btn border rounded-pill py-2 px-4'>sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar