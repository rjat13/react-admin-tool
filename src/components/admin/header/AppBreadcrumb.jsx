import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'
import {BREADCRUMBARRAY} from '../../../Constant.js';


const AppBreadcrumb = () => {
  const navigate = useNavigate()
  const currentLocation = useLocation()?.pathname
  const r = currentLocation.split('/')
  r.shift()
  const curretRoute =  r[r?.length - 1]

  const goBack = () => {
    navigate(-1)
  }


  return (
    <CBreadcrumb className="m-0 ms-2">
      <CBreadcrumbItem><Link to={'/dashboard'}>Home</Link></CBreadcrumbItem>
      {(r?.length > 1) ? r.map((val, i) => {
        return (<CBreadcrumbItem key={`breadcrumb-item-${i}`} active={ BREADCRUMBARRAY?.[0]?.[val]?.path == curretRoute ? true : false}>
          { BREADCRUMBARRAY?.[0]?.[val]?.path !== curretRoute ?
            <Link onClick={goBack} >{ BREADCRUMBARRAY?.[0]?.[val]?.name}</Link>
            :  BREADCRUMBARRAY?.[0]?.[val]?.name
          }
          </CBreadcrumbItem>)
      }) : 
      <CBreadcrumbItem active={false}>
        { BREADCRUMBARRAY?.[0]?.[curretRoute]?.name }
      </CBreadcrumbItem>
    }
      
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
