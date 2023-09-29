import { GUTTER_SPACING } from '@/constants'
import { EuroCircleOutlined } from '@ant-design/icons'
import { Card, Col, Form, Input, Row } from 'antd'

function Total() {
  return (
    <Card title='Total' extra bordered={false}>
      <Row gutter={GUTTER_SPACING}>
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
