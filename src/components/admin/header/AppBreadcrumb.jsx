import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'
import {BREADCRUMBARRAY} from '../../../Constant.js';
import _nav from '../sidebar/_nav.jsx';

const AppBreadcrumb = () => {
  const navigate = useNavigate()
  let currentUrl = useLocation()?.pathname
  currentUrl = currentUrl.replace('/admin/', '');
  console.log("url path", currentUrl)
  const r = currentUrl.split('/')
  console.log("routes", r)
  // r.shift()
  const curretRoute =  r[r?.length - 1];

  console.log("curretRoute", curretRoute)
  const active = _nav.find((route) => route.to.includes(curretRoute));
  console.log("active path", active)
  const goBack = () => {
    navigate(-1)
  }


  return (
    <CBreadcrumb className="m-0 ms-2">
      {console.log("BREADCRUMBARRAY", BREADCRUMBARRAY)}
      { r?.length === 1 && <CBreadcrumbItem active={false}>
        { BREADCRUMBARRAY?.[r?.[0]]?.name }
      </CBreadcrumbItem> }
      {(r?.length > 1) && r.map((val, i) => {
        return (<CBreadcrumbItem key={`breadcrumb-item-${i}`} active={ BREADCRUMBARRAY?.[val]?.path == curretRoute ? true : false}>
          { BREADCRUMBARRAY?.[val]?.path !== curretRoute ?
            <Link onClick={goBack} >{ BREADCRUMBARRAY?.[0]?.[val]?.name}</Link>
            :  BREADCRUMBARRAY?.[val]?.name
          }
          </CBreadcrumbItem>)
      })
    }
      
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
