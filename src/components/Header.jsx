import { CDN_LOGO } from "../utils/constants";

const Header=()=>{
    return(
        <div className="header">
          <div className="logo-container">
            <img className="logo-img" src={CDN_LOGO}/>
          </div>
          <div className="link-container">
            <ul type="none" className="ul-container">
                <li>Home</li>
                <li>About-us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
          </div>
        </div>
    )
}
export default Header;