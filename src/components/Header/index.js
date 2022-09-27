// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-style">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo-login"
    />
    <ul className="button-cont">
      <li>HOME</li>
      <li>PRODUCTS</li>
      <li>CART</li>
      <button type="button">Logout</button>
    </ul>
  </nav>
)
export default Header
