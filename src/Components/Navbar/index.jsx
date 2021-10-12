import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title__navbar">
        <h2>Agent List</h2>
      </div>
      <div className="navbar__menu">
        {/* <a href="#">home</a>
        <a href="#">about</a> */}
        <a href="https://github.com/L-David-T" target="_blank">
          David-Lezama
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
