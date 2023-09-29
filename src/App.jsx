import { Layout } from 'antd'
import 'antd/dist/antd.css'
import FooterComponent from './components/Footer'
import HeaderComponent from './components/Header'
import SiderComponent from './components/Sider'
import OrderFeature from './features/Order'
import './index.css'

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
