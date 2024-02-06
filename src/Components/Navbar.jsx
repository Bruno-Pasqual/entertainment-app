import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <a href="">
        <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
            fill="#FC4747"
          />
        </svg>
      </a>
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
