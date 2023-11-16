import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'
import {BREADCRUMBARRAY} from '../../../Constant.js';

const AppBreadcrumb = () => {
  const navigate = useNavigate()
  let currentUrl = useLocation()?.pathname
  currentUrl = currentUrl.replace('/admin/', '');
  const r = currentUrl.split('/')
  // r.shift()
  const curretRoute =  r[r?.length - 1];
  const goBack = () => {
    navigate(-1)
  }


  return (
    <CBreadcrumb className="m-0 ms-2">
      { r?.length === 1 && <CBreadcrumbItem active={false}>
        { BREADCRUMBARRAY?.[r?.[0]]?.name }
      </CBreadcrumbItem> }
      {(r?.length > 1) && r.map((val, i) => {
        return (<CBreadcrumbItem key={`breadcrumb-item-${i}`} active={ BREADCRUMBARRAY?.[r?.[0]]?.path == curretRoute ? true : false}>
          { BREADCRUMBARRAY?.[val]?.path !== curretRoute ?
            <Link to={BREADCRUMBARRAY?.[val]?.path} onClick={goBack} >{ BREADCRUMBARRAY?.[val]?.name}</Link>
            :  BREADCRUMBARRAY?.[val]?.name
          }
          </CBreadcrumbItem>)
      })
    }
      
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
