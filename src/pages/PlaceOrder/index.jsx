import { useContext } from 'react'
import './index.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {
  const { getCartTotal } = useContext(StoreContext);

  return (
    <div className='place-order mt-5'>
      <div className="container d-flex justify-content-between gap-5">
        <div className="left w-100">
          <p className="title mb-5">Delivery Information</p>
          <div className="multi-fields d-flex gap-2">
            <input className='mb-3 w-100 p-2 rounded' type="text" placeholder='First name' />
            <input className='mb-3 w-100 p-2 rounded' type="text" placeholder='Last name' />
          </div>
          <input className='mb-3 w-100 p-2 rounded' type="email" placeholder="Email address" />
          <input className='mb-3 w-100 p-2 rounded' type="text" placeholder="Street" />
          <div className="multi-fields d-flex gap-2">
            <input className='mb-3 w-100 p-2 rounded' type="text" placeholder='City' />
            <input className='mb-3 w-100 p-2 rounded' type="text" placeholder='State' />
          </div>
          <div className="multi-fields d-flex gap-2">
            <input className='mb-3 w-100 p-2 rounded' type="text" placeholder='Zip code' />
            <input className='mb-3 w-100 p-2 rounded' type="text" placeholder='Country' />
          </div>
          <input className='mb-3 w-100 p-2 rounded' type="text" placeholder='Phone' />
        </div>
        <div className="right w-100">
          <div className="cart-total d-flex flex-column">
            <h2 className='mb-5'>Cart Total</h2>
            <div>
              <div className="cart-total-details d-flex justify-content-between">
                <p className='mb-0'>Subtotal</p>
                <p className='mb-0'>${getCartTotal()}</p>
              </div>
              <hr className='my-2 mx-0' />
              <div className="cart-total-details d-flex justify-content-between">
                <p className='mb-0'>Delivery Fee</p>
                <p className='mb-0'>${5}</p>
              </div>
              <hr className='my-2 mx-0' />
              <div className="cart-total-details d-flex justify-content-between">
                <p className='mb-0'>Total</p>
                <p className='mb-0'>${getCartTotal() + 5}</p>
              </div>
            </div>
            <button className='btn text-white mt-4'>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder