import orderApi from '@/api/orderApi'
import { DEFAULT_VALUE } from '@/constants'
import { Breadcrumb, Button, Form, Layout, message } from 'antd'
import { useEffect } from 'react'
import Consumer from '../components/Consumer'
import Items from '../components/Items'
import Shipping from '../components/Shipping'
import Total from '../components/Total'

function CreateOrder() {
  const { Content } = Layout
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  useEffect(() => {
    form.setFieldsValue(DEFAULT_VALUE)
  }, [])

  const onFinish = async (values) => {
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
          name: values.nameItem,
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
      ],
      shipping: {
        countryCode: values.countryCode,
        postcode: values.postcode,
        name: values.nameShipping,
        line1: values.line1,
        suburb: values.suburb,
        phoneNumber: values.phoneShipping
      },
      totalAmount: { currency: 'EUR', amount: values.totalAmount },
      merchant: {
        redirectConfirmUrl: 'https://portal.integration.scalapay.com/success-url',
        redirectCancelUrl: 'https://portal.integration.scalapay.com/failure-url'
      }
    }
    form.resetFields()

    try {
      const response = await orderApi.add(newValue)
      const result = await response.data
      messageApi.open({
        type: 'success',
        content: 'Submitted'
      })
      setTimeout(() => {
        window.location.replace(result.checkoutUrl)
      }, 1000)
    } catch (error) {
      console.log(error.message)
    }
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
        {contextHolder}
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off' form={form}>
          <Consumer />
          <Items />
          <Shipping />
          <Total />
          <Form.Item>
            <Button type='primary' htmlType='submit' className='bg-[#1890ff] ml-6'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  )
}

export default CreateOrder
