import { UserOutlined } from '@ant-design/icons'
import { Avatar, Layout } from 'antd'
import React from 'react'

function HeaderComponent() {
  const { Header } = Layout
  return (
    <Header className='site-layout-background p-0 flex items-center justify-end pr-3'>
      <Avatar size='large' icon={<UserOutlined />} className='flex items-center justify-center' />
    </Header>
  )
}

export default HeaderComponent
