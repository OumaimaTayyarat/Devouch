import { useContext, useState, useRef } from "react";
import { ShopContext } from "../../Context/ShopContext";
import footer_logo from "../assets/logo-big1.png";
function Navbar() {
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.replace("/");
    console.log("hahahahahaha");
  };

  return (
    <div>
      <nav id="nav" className="nav">
        <div className="nav-container">
          <a href="/" className="logo-wrapper">
            <div className="logo">
              <div id="container">
                <img src={footer_logo} alt="" />
              </div>
            </div>
          </a>
          <div className="menu-wrapper">
            <div className="mobile-wrapper">
              <div className="mobile-mobile-head">
                <a href="#" className="logo-wrapper">
                  <img
                    className="logo-img"
                    src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/f06d7301a0e51d1ada45994de485c8872270c4c6/marketing-hero-section/assets/logo.svg"
                    alt="Open Props logo"
                    width="160"
                    height="29.44"
                  />
                </a>
                <button className="icon-btn" aria-label="Close Menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                  </svg>
                </button>
              </div>
              <menu className="menu">
                <li>
                  <a href="/Collections" className="nav-link">
                    Nos Collections
                  </a>
                </li>
                <li>
                  <a href="/Blog" className="nav-link">
                    ModaMind Blog
                  </a>
                </li>
                <li>
                  <a href="/Contact" className="nav-link">
                    Contactez-nous
                  </a>
                </li>
              </menu>
            </div>

            <div className="actions">
              {localStorage.getItem("auth-token") ? (
                <a onClick={handleLogout} className="button-link">
                  Logout
                </a>
              ) : (
                <a href="/login" className="button-link">
                  Login
                </a>
              )}

              <a href="/cart" className="button-link primary">
                Panier
                <div className="nav-cart-count">{getTotalCartItems()}</div>
              </a>
            </div>
          </div>

          {/* <button className="nav-menu-visible" aria-label="open">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </button> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
