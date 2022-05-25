import { NavLink } from "react-router-dom";
import logo from '../../logo.svg';

import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <nav className="App-header">
          <img className="App-header__logo" src={logo} alt="logo" />
          <NavLink
            className="App-link App-header__item"
            to="AnimatedForm">AnimatedForm
          </NavLink>
          <NavLink
            to="click"
            className="App-link App-header__item"
          >
          Click
          </NavLink>
          <NavLink
            to="rcomponent"
            className="App-link App-header__item"
          >
          RComponent
          </NavLink>
        </nav>
    </header>
    <div className="App-header_tooltip">
      Header made with React Router v6
    </div>
  </>
  );
}

export default Header;