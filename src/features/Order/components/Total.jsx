import { EuroCircleOutlined } from '@ant-design/icons'
import { Card, Col, Form, Input, Row } from 'antd'

function Total() {
  return (
    <Card title='Total' extra bordered={false}>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32
        }}
      >
        <Col className='gutter-row' span={24}>
          <Form.Item
            label='Total Amount'
            name='totalAmount'
            rules={[
              {
                min: 0,
                required: true,
                message: 'Total amout is required!'
              }
            ]}
          >
            <Input prefix={<EuroCircleOutlined />} disabled className='text-lg font-bold' />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  )
}

export default Total
