import { EuroCircleOutlined } from '@ant-design/icons'
import { Card, Col, Form, Input, InputNumber, Row, Select } from 'antd'

function Items() {
  return (
    <Card title='Items' bordered={false}>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32
        }}
      >
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='SKU'
            name='sku'
            rules={[
              {
                required: true,
                message: 'Please input your sku!'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='Category'
            name='category'
            rules={[
              {
                required: true,
                message: 'Please input your category!'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 12,
          sm: 16,
          md: 24,
          lg: 32
        }}
      >
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='Name'
            name='nameItem'
            rules={[
              {
                required: true,
                message: 'Please input your name item!'
              }
            ]}
          >
            <Input maxLength={10} />
          </Form.Item>
        </Col>
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='Quantity'
            name='quantity'
            rules={[
              {
                required: true,
                pattern: new RegExp(/^[0-9]+$/),
                message: 'Please input your quantity!'
              }
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 12,
          sm: 16,
          md: 24,
          lg: 32
        }}
      >
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item
            label='Price'
            name='price'
            rules={[
              {
                required: true,
                pattern: new RegExp(/^[0-9]+$/),
                message: 'Price is required!'
              }
            ]}
          >
            <Input prefix={<EuroCircleOutlined />} />
          </Form.Item>
        </Col>
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item name='subcategory' label='Subcategory'>
            <Select mode='multiple'>
              <Select.Option value='shirt'>Shirt</Select.Option>
              <Select.Option value='short'>Short</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 12,
          sm: 16,
          md: 24,
          lg: 32
        }}
      >
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item label='PageUrl' name='pageUrl'>
            <Input />
          </Form.Item>
        </Col>
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item label='ImageUrl' name='imageUrl'>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 12,
          sm: 16,
          md: 24,
          lg: 32
        }}
      >
        <Col className='gutter-row' span={12} xs={24} sm={12}>
          <Form.Item label='Gtin' name='gtin'>
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  )
}

export default Items
