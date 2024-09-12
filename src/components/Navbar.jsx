import { useNavigate, useLocation, Route } from "react-router-dom";
import assets from "../assets/assets";
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <img
              src={assets.icons.ExploreIcon}
              style={{
                filter: pathMatchRoute("/")
                  ? "brightness(0) saturate(100%) invert(14%) sepia(13%) saturate(0%) hue-rotate(189deg) brightness(99%) contrast(94%)"
                  : "brightness(0) saturate(100%) invert(67%) sepia(8%) saturate(0%) hue-rotate(201deg) brightness(95%) contrast(85%)",
              }}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <img
              src={assets.icons.OfferIcon}
              style={{
                filter: pathMatchRoute("/offers")
                  ? "brightness(0) saturate(100%) invert(14%) sepia(13%) saturate(0%) hue-rotate(189deg) brightness(99%) contrast(94%)"
                  : "brightness(0) saturate(100%) invert(67%) sepia(8%) saturate(0%) hue-rotate(201deg) brightness(95%) contrast(85%)",
              }}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <img
              src={assets.icons.PersonOutlineIcon}
              style={{
                filter: pathMatchRoute("/profile")
                  ? "brightness(0) saturate(100%) invert(14%) sepia(13%) saturate(0%) hue-rotate(189deg) brightness(99%) contrast(94%)"
                  : "brightness(0) saturate(100%) invert(67%) sepia(8%) saturate(0%) hue-rotate(201deg) brightness(95%) contrast(85%)",
              }}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
