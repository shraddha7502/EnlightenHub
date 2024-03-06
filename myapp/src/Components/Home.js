import React from 'react'
import './Home.css'
// <<<<<<< HEAD
import team from './team.png'
// =======
import book from '../assets/books.png';
import girl from '../assets/girl_with_laptop.png';
// >>>>>>> d87df27f3b8bca3193714dbc1f59e75f515db89c
const Home = () => {
  return (
    <main className="hero container">
    <div className="hero-content">
      <h2>Unleash Your Brainpower-<br/>
       Where Brilliance Meets Badassery! 🚀</h2>
      <h6>
      Buckle up, legends! EnlightenHub is not your grandma's learning platform – <br/>it's a wild ride to genius town. We're not here to bore you with textbooks; <br/>we're here to ignite your mind and make learning a freakin' adventure!
      </h6>

      <div className="hero-btn">
        <button className='btn-primary'>Get started </button>
        <button className="secondary-btn">view courses</button>
      </div>

      <div className="shopping">
        <p>Also Available On</p>

        <div className="brand-icons">
          <img src={girl} alt="girl" className='iim' />
          <img src={book} alt="books"  className='iim' />
        </div>
      </div>
    </div>
    <div className="hero-image">
      <img src={team} alt="team" />
    </div>
  </main>
  )
}

export default Home
