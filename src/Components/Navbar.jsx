import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <img src="/assets/logo.svg" alt="" id="logo-icon" />
      <div id="icons-container">
        <img src="/assets/icon-nav-home.svg" alt="" />
        <img src="/assets/icon-nav-movies.svg" alt="" />
        <img src="/assets/icon-nav-tv-series.svg" alt="" />
        <img src="/assets/icon-nav-bookmark.svg" alt="" />
      </div>
      <img src="/assets/image-avatar.png" alt="" id="perfil-img" />
    </nav>
  );
};

export default Navbar;
