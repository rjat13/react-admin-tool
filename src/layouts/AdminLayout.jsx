import { CContainer } from "@coreui/react"
import Footer from "../components/admin/footer"
import Header from "../components/admin/header"
import Sidebar from "../components/admin/sidebar"
import { Outlet } from "react-router-dom"


const AdminLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <div className="body flex-grow-1 px-3">
          {/* <AppContent /> */}
          <CContainer lg>
            <Outlet />
          </CContainer>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default AdminLayout