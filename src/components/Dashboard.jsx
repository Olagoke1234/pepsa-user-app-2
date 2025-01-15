import "../componentsCSS/Dashboard.css";
import HamburgerMenu from "./Hamburger";
import Scanner from "../assets/iconamoon_scanner-thin.png";
import Messages from "../assets/messages.png";
import Notification from "../assets/Vector.png";
import Add from "../assets/add.png";
import Eye from "../assets/eye.png";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="dashboard-header">
          <div className="dashboard-hamburger">
            <HamburgerMenu />
          </div>
          <div className="dashboard-icons1">
            <img src={Scanner} alt="Icon" />
            <img src={Messages} alt="Icon" />
            <img src={Notification} alt="Icon" />
          </div>
        </div>
        <div className="balance">
          <p>Wallet Balance</p>
          <p className="amount">
            N1,150,000.98
            <img src={Eye} />
          </p>
          <img src={Add} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
