
import CIcon from "@coreui/icons-react";
import { cilSpeedometer, cilUser, cilChatBubble, cilPuzzle, cilSatelite, cilGrid } from "@coreui/icons";
import { CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Users Management",
    to: "users",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Slider",
    to: "slider",
    icon: <CIcon icon={cilSatelite} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Tables",
    to: "tables",
    icon: <CIcon icon={cilGrid} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Personality Quiz",
    to: "/personality-quiz",
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Travel Quiz",
    to: "/travel-quiz",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
];

export default _nav;
