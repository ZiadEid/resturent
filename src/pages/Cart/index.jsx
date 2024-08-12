import { useContext } from 'react'
import './index.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const { food_list, cartItems, removeFromCart, getCartTotal } = useContext(StoreContext);
  const navegate = useNavigate()

  return (
    <div className='cart mt-5'>
      <div className="container">
        <div className="cart-items">
          <div className="title">
            <p className='mb-0'>Items</p>
            <p className='mb-0'>Title</p>
            <p className='mb-0'>Price</p>
            <p className='mb-0'>Quantity</p>
            <p className='mb-0'>Total</p>
            <p className='mb-0'>Remove</p>
          </div>
          <br />
          <hr />
          {
            food_list.map((item, index) => {
              let lCartItems = JSON.parse(localStorage.getItem('cartItems'));
              if (cartItems[item._id] > 0) {
                return (
                  <div key={item._id}>
                    <div className='title cart-item text-black my-2 mx-0'>
                      <img src={item.image} alt={item.name} />
                      <p className='mb-0'>{item.name}</p>
                      <p className='mb-0'>${item.price}</p>
                      <p className='mb-0'>{cartItems[item._id]}</p>
                      <p className='mb-0'>${item.price * cartItems[item._id]}</p>
                      <p onClick={() => removeFromCart(item._id)} className='mb-0'>x</p>
                    </div>
                    <hr />
                  </div>
                )
              }
            })
          }
        </div>
        <div className="cart-footer mt-5 d-flex flex-wrap justify-content-between">
          <div className="cart-promocode">
            <div>
              <p className='mb-0'>If you have a promo code, Enter it here</p>
              <div className='cart-promocode-details mt-2 d-flex justify-content-between align-items-center rounded overflow-hidden'>
                <input className='border-0 ps-2' type="text" placeholder='promo code' />
                <button className='border-0 bg-black text-white'>Submit</button>
              </div>
            </div>
          </div>
          <div className="cart-total d-flex flex-column">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details d-flex justify-content-between">
                <p className='mb-0'>Subtotal</p>
                <p className='mb-0'>${getCartTotal()}</p>
              </div>
              <hr className='my-2 mx-0' />
              <div className="cart-total-details d-flex justify-content-between">
                <p className='mb-0'>Delivery Fee</p>
                <p className='mb-0'>${getCartTotal() ? 5 : 0}</p>
              </div>
              <hr className='my-2 mx-0' />
              <div className="cart-total-details d-flex justify-content-between">
                <p className='mb-0'>Total</p>
                <p className='mb-0'>${getCartTotal() ? getCartTotal() + 5 : 0}</p>
              </div>
            </div>
            <button onClick={() => navegate('/order')} disabled={ getCartTotal() ? false : true } className='btn text-white'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart