import { Link } from "react-router-dom";
import logo from '../../logo.svg';

import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <nav>
        <img className="App-header__logo" src={logo} alt="logo" />
        <Link to="first">First</Link>
        <Link to="click"
          className="App-link App-header__item"
        >
        Click
        </Link>
        <Link to="rcomponent"
          className="App-link App-header__item"
        >
        RComponent
        </Link>
      </nav>
  </header>
  );
}

export default Header;