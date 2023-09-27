import { Breadcrumb, Layout } from 'antd'
import React from 'react'

function CreateOrder() {
  const { Content } = Layout

  return (
    <Content
      style={{
        margin: '0 16px'
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0'
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Order</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className='site-layout-background'
        style={{
          padding: 24,
          minHeight: 360
        }}
      >
        Order Page
      </div>
    </Content>
  )
}

export default CreateOrder
