// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <div className="cloth-cont">
      <div>
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air your clothes are so beautiful, and
          you are looking like fairy.
        </p>
        <button type="button">Shop Now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt=" clothes that get you noticed"
        className="cloths-image"
      />
    </div>
  </div>
)

export default Home
