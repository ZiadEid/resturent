import { menu_list } from "../../assets/assets";
import './index.css'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="exploreMenu">
      <div className="container">
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experties. Our mission is to satisfy your cravings and elevate your dining experience. one delicious meal at a time.
        </p>
        <div className="explore-menu-list mt-5 d-flex justify-content-between align-items-center gap-4">
          {
            menu_list.map((el, index) => {
              return (
                <div
                  key={index}
                  className="explore-menu-list-item"
                  onClick={() => setCategory(prev => prev == el.menu_name ? 'All' : el.menu_name)}
                >
                  <img className={`rounded-circle ${category == el.menu_name ? 'active' : ''}`} src={el.menu_image} alt={el.menu_name} />
                  <p className="text-center mt-2">{el.menu_name}</p>
                </div>
              )
            })
          }
        </div>
        <hr className="my-2 mx-0 border-0" />
      </div>
    </div>
  )
}

export default ExploreMenu