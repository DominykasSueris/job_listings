import BgHeaderDesktop from "../images/bg-header-desktop.svg";
import "../App.scss";

export function NavBar() {
  return (
    <nav className="navbar">
      <img src={BgHeaderDesktop} />
    </nav>
  );
}
