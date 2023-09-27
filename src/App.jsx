import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import FooterComponent from './components/Footer'
import HeaderComponent from './components/Header'
import SiderComponent from './components/Sider'
import './index.css'
import OrderFeature from './features/Order'

const App = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh'
      }}
    >
      <SiderComponent />
      <Layout className='site-layout'>
        <HeaderComponent />
        <OrderFeature />
        <FooterComponent />
      </Layout>
    </Layout>
  )
}
export default App
