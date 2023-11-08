import { CAvatar, CDropdown, CDropdownHeader, CDropdownItem, CDropdownMenu, CDropdownToggle } from "@coreui/react";
import { cilLockLocked } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useAuth } from "../../../hooks/useAuth";
import { AuthContext } from "../../../store/provider/AuthProvider";


const AppHeaderDropdown = () => {
  const { userSignOut, AuthUser } = useAuth(AuthContext);


  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar color={'secondary'} textColor="white">{AuthUser?.email ? AuthUser?.email?.[0]?.toUpperCase() : 'A'}</CAvatar>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
        {/* <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownDivider /> */}
        <CDropdownItem onClick={userSignOut} style={{ cursor: "pointer" }}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
