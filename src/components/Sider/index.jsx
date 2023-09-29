import {
  AreaChartOutlined,
  HeatMapOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  }
}

const { Sider } = Layout

const items = [
  getItem('Order', 'sub1', <UnorderedListOutlined />, [
    getItem('Create', '1', <Link to='/order/create'></Link>)
  ]),
  getItem('Product', 'sub2', <ShoppingCartOutlined />),
  getItem('Account', 'sub3', <UserOutlined />),
  getItem('Analysis', 'sub4', <AreaChartOutlined />),
  getItem('Exception', 'sub5', <HeatMapOutlined />)
]

function SiderComponent() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Sider
      className='hideOnMobile'
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className='logo' />
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='vertical' items={items} />
    </Sider>
  )
}

export default SiderComponent
