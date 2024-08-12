import './index.css'
import { assets } from '../../assets/assets';
const SignIn = ({ setShowLogin, currState, setCurrState }) => {

  const handlerSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='sign-in position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center'>
      <form onSubmit={handlerSubmit} className='bg-white d-flex flex-column rounded position-relative'>
        <div className="title text-black d-flex justify-content-between align-items-center">
          <h2>{currState}</h2>
          <img className='' onClick={() => setShowLogin(prev => prev = false)} src={assets.cross_icon} alt="close icone" />
        </div>
        <div className="btns d-flex flex-column">
          <input className='rounded p-2' type="email" placeholder='Enter Your Email' required />
          <input className='rounded p-2' type="password" placeholder='Enter Your Password' required />
        </div>
        <button className='btn text-white' type='submit'>{currState == 'Sign Up' ? 'Create account' : 'Login'}</button>
        <p
          onClick={() => setCurrState(prev => prev = 'Sign Up')} className="mb-0">Create a new account?
        </p>
      </form>
    </div>
  )
}

export default SignIn