import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo" src="https://bayaninvestment.com/wp-content/uploads/2022/08/cropped-cropped-cropped-cropped-Safeimagekit-resized-imgpng.png" alt="" />
        <span>BAYAN</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon"/>
        
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        
        <div className="user">
          <img
            src="https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png"
            alt=""
          />
          <span>Antony</span>
        </div>
        <img src="/settings.svg" alt="" className="icon"/>
      </div>
    </div>
  );
};

export default Navbar;
