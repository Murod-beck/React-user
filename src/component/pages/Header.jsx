import { Link } from "react-router-dom";
import style from "../style/Header.module.css";

function Header() {
  const openModals = () => {};
  return (
    <header>
      <h1 className={style.logo}>React App</h1>
      <nav className={style.nav}>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>
      <button onClick={openModals}>Modal</button>
    </header>
  );
}

export default Header;
