import { GUTTER_SPACING } from '@/constants'
import { Card, Col, Form, Input, Row } from 'antd'

function Shipping() {
  return (
    <Card title='Shipping' bordered={false}>
      <Row gutter={GUTTER_SPACING}>
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='CTC'
            name='countryCode'
            rules={[
              {
                min: '2',
                max: 2,
                required: true,
                message: 'Please input your country code!'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='Post code'
            name='postcode'
            rules={[
              {
                required: true,
                pattern: new RegExp(/^[0-9]+$/),
                message: 'Please input your post code!'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={GUTTER_SPACING}>
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='Name'
            name='nameShipping'
            rules={[
              {
                required: true,
                message: 'Please input your name!'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='Adress'
            name='line1'
            rules={[
              {
                required: true,
                message: 'Please input your adress!'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={GUTTER_SPACING}>
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='Suburb'
            name='suburb'
            rules={[
              {
                required: true,
                message: 'Please input suburb!'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='Phone'
            name='phoneShipping'
            rules={[
              {
                pattern: new RegExp(/^[0-9]+$/),
                message: 'Please enter your phone!'
              }
            ]}
          >
            <Input maxLength={10} />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  )
}

export default Shipping
