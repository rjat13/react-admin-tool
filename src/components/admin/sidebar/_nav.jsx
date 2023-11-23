
import CIcon from "@coreui/icons-react";
import { cilSpeedometer, cilUser, cilSatelite, cilGrid, cilBell } from "@coreui/icons";
import { CNavGroup, CNavItem } from "@coreui/react";

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
    component: CNavGroup,
    name: 'UI Components',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: 'ui/buttons',
      },
      {
        component: CNavItem,
        name: 'Form Validation',
        to: 'ui/form-validation',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: 'ui/modals',
      },
    ],
  },
];

export default _nav;
