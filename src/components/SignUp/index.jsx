import './index.css'
import { assets } from '../../assets/assets';
const SignUp = ({ setShowLogin, currState, setCurrState }) => {

  const handlerSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='sign-up position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center'>
      <form onSubmit={handlerSubmit} className='bg-white d-flex flex-column rounded position-relative'>
        <div className="title text-black d-flex justify-content-between align-items-center">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(prev => prev = false)} src={assets.cross_icon} alt="close icone" />
        </div>
        <div className="btns d-flex flex-column">
          <input className='rounded p-2' type="text" placeholder='Enter Your Name' required />
          <input className='rounded p-2' type="email" placeholder='Enter Your Email' required />
          <input className='rounded p-2' type="password" placeholder='Enter Your Password' required />
          <input className='rounded p-2' type="password" placeholder='Confirm Your Password' required />
        </div>
        <button className='btn text-white' type='submit'>Create account</button>
        <div className="condition d-flex align-items-start gap-2 ">
          <input type="checkbox" required />
          <p className='mb-0'>
            By continuing, I agree to the terms of use & Privacy Policy.
          </p>
        </div>
        <p
          onClick={() => setCurrState(prev => prev = 'Sign In')} className="mb-0">Already have an acount?
        </p>
      </form>
    </div>
  )
}

export default SignUp