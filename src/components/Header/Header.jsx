import logo from '../../logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
    <img className="App-header__logo" src={logo} alt="logo" />
    <a
      className="App-link App-header__item"
      href="/"
      target="_blank"
      rel="noopener noreferrer"
    >
    Box
    </a>
    <a
      className="App-link App-header__item"
      href="/"
      target="_blank"
      rel="noopener noreferrer"
    >
    Click
    </a>
    <a
      className="App-link App-header__item"
      href="/"
      target="_blank"
      rel="noopener noreferrer"
    >
    RComponent
    </a>
  </header>
  );
}

export default Header;