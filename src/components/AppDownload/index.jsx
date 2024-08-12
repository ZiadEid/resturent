import './index.css'
import { assets } from './../../assets/assets';
const AppDownload = () => {
  return (
    <div className='app-download text-center mt-5' id='appDownload'>
      <div className="container">
        <p className="mb-0">For Better Experince Download <br /> Tomato App</p>
        <div className="download-btns mt-4 d-flex justify-content-center align-items-center">
          <img src={assets.play_store} alt="play store icon" />
          <img src={assets.app_store} alt="app store icon" />
        </div>
      </div>
    </div>
  )
}

export default AppDownload