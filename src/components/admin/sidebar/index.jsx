import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import { SidebarNav } from './SidebarNav'
import BrandLogo from '../../../assets/img/logo.svg';
import BrandLogoNarrow from '../../../assets/img/logo-narrow.svg';
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from './_nav'
import { toggleSidebar } from '../../../store';

const Sidebar = () => {
  const dispatch = useDispatch()
  const {sidebarShow, sidebarUnfoldable} = useSelector(({common}) => common)

  return (
    <CSidebar
      position="fixed"
      unfoldable={sidebarUnfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(toggleSidebar({ sidebarShow: visible }))
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <div className='sidebar-brand-full'>
          E-commerce
        </div>
        <div className='sidebar-brand-narrow'>
          EC
        </div>
        {/* <h3 style={{color:'white', fontWeight:"bold", marginLeft:"20px"}}>E-commerce</h3> */}
        {/* <img className='sidebar-brand-full' src={BrandLogo} />
        <img className='sidebar-brand-narrow' src={BrandLogoNarrow} /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <SidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(toggleSidebar({ sidebarUnfoldable: !sidebarUnfoldable }))}
      />
    </CSidebar>
  )
}

export default Sidebar