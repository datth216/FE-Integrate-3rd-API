import { Breadcrumb, Form, Layout, message } from 'antd'
import React from 'react'
import Consumer from '../components/Consumer'

function CreateOrder() {
  const { Content } = Layout
  const [form] = Form.useForm()

  const onFinish = (values) => {
    let newValue = {
      consumer: {
        ...values,
        givenNames: values.givenNames,
        surname: values.surname,
        phoneNumber: values.phoneNumber,
        email: values.email
      }
    }
    form.resetFields()
    console.log(newValue)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

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
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off' form={form}>
          <Consumer />
        </Form>
      </div>
    </Content>
  )
}

export default CreateOrder
