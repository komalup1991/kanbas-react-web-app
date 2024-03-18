import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt } from "react-icons/fa";
import dash from "../Images/dash.svg";
import course from "../Images/home.svg";
import calendar from "../Images/calendar.svg";
import inbox from "../Images/inbox.svg";
import history from "../Images/history.svg";
import commons from "../Images/commons.svg";
import studio from "../Images/studio.svg";
import help from "../Images/help.svg";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <img   className="ic-icon-svg" src={dash} alt="dash" /> },
    { label: "Courses",   icon: <img    className="ic-icon-svg ic-icon-svg--courses" src={course} alt="dash" />         },
    { label: "Calendar",  icon: <img  className="ic-icon-svg ic-icon-svg--calendar" src={calendar} alt="calendar" />  },
    { label: "Inbox",  icon: <img className="ic-icon-svg ic-icon-svg--inbox" src={inbox} alt="calendar" />},
    { label: "History",  icon: <img     className="ic-icon-svg menu-item__icon svg-icon-history" src={history} alt="calendar" />},
    { label: "Commons",  icon: <img  className="ic-icon-svg ic-icon-svg--lti menu-item__icon" src={commons} alt="calendar" /> },
    { label: "Studio",  icon: <img  className="ic-icon-svg ic-icon-svg--lti menu-item__icon" src={studio} alt="calendar" />},
    { label: "Help",  icon: <img  className="ic-icon-svg ic-icon-svg--lti menu-item__icon" src={help} alt="calendar" />},
  ];
  const { pathname } = useLocation();
  return (
    <div className="wd-bg-color-black">
    <ul className="wd-kanbas-navigation">
      <li>
      <a href="http://northeastern.edu"
              ><img
                style={{height: 50, width: 50}}
                src="../../images/neu.png"
            /></a>
      </li>
      {links.map((link, index) => (
        
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}>
         {link.icon}
             <br/>
              {link.label} 
              </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
export default KanbasNavigation;

