import './index.css'
import { StoreContext } from '../../Context/StoreContext';
import FoodCard from '../FoodCard';
import { useContext } from 'react';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  return (
    <div className='food-display mt-4'>
      <div className="container">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {
            food_list.map((item, index) => {
              if (category == 'All' || category == item.category) {
                return (
                  <FoodCard key={index} id={index} name={item.name} price={item.price} description={item.description} image={item.image} />
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FoodDisplay