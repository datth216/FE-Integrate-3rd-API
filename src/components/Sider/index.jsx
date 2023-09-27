import { UnorderedListOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
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
  ])
]

function SiderComponent() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className='logo' />
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={items} />
    </Sider>
  )
}

export default SiderComponent
