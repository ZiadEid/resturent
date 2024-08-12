import './index.css'
import { assets } from './../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';

const FoodCard = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-card rounded overflow-hidden'>
      <div className="food-img position-relative">
        <img className='w-100' src={image} alt={name} />
        {
          !cartItems[id]
            ? <img className='incre-white position-absolute rounded-circel mb-1'
              onClick={() => addToCart(id)} src={assets.add_icon_white} />
            : <div className='btns-counter position-absolute bg-white rounded-pill d-flex align-items-center gap-2 p-1'>
              <img className='decre' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="decrement" />
              <p className='mb-0'>{cartItems[id]}</p>
              <img className='incre-green' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="increment" />
            </div>
        }
      </div>
      <div className="food-info p-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className='item-name mb-0'>{name}</p>
          <img className='item-rating' src={assets.rating_starts} alt="rating" />
        </div>
        <p className='item-desc mb-0 desc'>{description}</p>
        <p className='item-price my-2 price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodCard