import { Layout } from 'antd'
import React from 'react'

function FooterComponent() {
  const { Footer } = Layout

  return (
    <Footer
      style={{
        textAlign: 'center'
      }}
    >
      Ant Design ©2023 Made With ❤
    </Footer>
  )
}

export default FooterComponent
