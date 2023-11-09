import React from 'react'
import { CFooter } from '@coreui/react'

const Footer = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">&copy; {new Date().getFullYear()} Demo.&nbsp;All right reserved.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(Footer)
