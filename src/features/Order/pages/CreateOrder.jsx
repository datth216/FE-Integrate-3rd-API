import { Breadcrumb, Button, Form, Layout } from 'antd'
import React, { useEffect } from 'react'
import Consumer from '../components/Consumer'
import Items from '../components/Items'

function CreateOrder() {
  const { Content } = Layout
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({
      givenNames: 'Joe',
      surname: 'Consumer',
      email: 'test@scalapay.com',
      phoneNumber: '0400000001',
      sku: '12341234',
      category: 'clothes',
      name: 'T-Shirt',
      quantity: 1,
      price: '10',
      subcategory: ['short', 'shirt'],
      pageUrl: 'https://www.scalapay.com//product/view/',
      imageUrl: 'https://www.scalapay.com//product/view/',
      gtin: '123458791330'
    })
  }, [])

  const onFinish = (values) => {
    let newValue = {
      consumer: {
        givenNames: values.givenNames,
        surname: values.surname,
        phoneNumber: values.phoneNumber,
        email: values.email
      },
      items: [
        {
          sku: values.sku,
          name: values.name,
          category: values.category,
          quantity: values.quantity,
          price: {
            currency: 'EUR',
            amount: values.price
          },
          subcategory: [...values.subcategory],
          pageUrl: values.pageUrl,
          imageUrl: values.imageUrl,
          gtin: values.gtin
        }
      ]
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
          <Items />
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  )
}

export default CreateOrder
