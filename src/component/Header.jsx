import style from "./style/Header.module.css";

function Header() {
  const openModals = () => {};
  return (
    <header>
      <h1 className={style.logo}>React App</h1>
      <nav className={style.nav}>
        <a href="s">First Link</a>
        <a href="a">Second Link</a>
        <a href="b">Third Link</a>
      </nav>
      <button onClick={openModals}>Modal</button>
    </header>
  );
}

export default Header;
