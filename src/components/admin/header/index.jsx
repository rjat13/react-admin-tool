import { useSelector, useDispatch } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
} from '@coreui/react'
import { toggleSidebar } from '../../../store'
import BrandLogo from '../../../assets/img/logo-negative.svg';
import AppHeaderDropdown from './AppHeaderDropdown'
import AppBreadcrumb from './AppBreadcrumb'

const Header = () => {
  const dispatch = useDispatch()
  const {sidebarShow} = useSelector(({common}) => common)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch(toggleSidebar({ sidebarShow: !sidebarShow }))}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <img className='sidebar-brand-full' src={BrandLogo} />
        </CHeaderBrand>
        {/* <CHeaderNav style={{marginLeft:'auto'}}>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav> */}
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default Header