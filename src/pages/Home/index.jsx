import { useState } from 'react'
import './index.css'
import ExploreMenu from './../../components/ExploreMenu';
import FoodDisplay from './../../components/FoodDisplay';
import Header from './../../components/Header';
import AppDownload from '../../components/AppDownload';

const Home = () => {
  const [category, setCategory] = useState('All')
  
  return (
    <div className='home'>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home