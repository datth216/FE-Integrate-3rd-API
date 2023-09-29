import { GUTTER_SPACING } from '@/constants'
import { Card, Col, Form, Input, Row } from 'antd'

function Consumer() {
  return (
    <Card title='Consumer' bordered={false}>
      <Row gutter={GUTTER_SPACING}>
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='First Name'
            name='givenNames'
            rules={[
              {
                required: true,
                message: 'Please input your first name!'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='Last Name'
            name='surname'
            rules={[
              {
                required: true,
                message: 'Please input your last name!'
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
            label='Phone'
            name='phoneNumber'
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
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                type: 'email',
                message: 'Please input your email!'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  )
}

export default Consumer
