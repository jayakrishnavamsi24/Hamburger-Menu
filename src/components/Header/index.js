import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import 'reactjs-popup/dist/index.css'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link to="/" className="logo-link">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          data-testid="hamburgerIconButton"
          className="trigger-button"
        >
          <GiHamburgerMenu />
        </button>
      }
      contentStyle={{width: '100%'}}
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <div className="close-btn-container">
            <button
              type="button"
              className="trigger-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </div>
          <ul className="modal-nav-container">
            <Link onClick={() => close()} to="/" className="link-component">
              <li className="nav-item">
                <AiFillHome className="icon" />
                <h1> Home </h1>
              </li>
            </Link>
            <Link
              onClick={() => close()}
              to="/about"
              className="link-component"
            >
              <li className="nav-item">
                <BsInfoCircleFill className="icon" />
                <h1> About </h1>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default Header
