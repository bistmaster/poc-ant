import React from 'react'
import { Col, Select } from 'antd'
const { Option } = Select

const Filter = (props) => {
  const { handleChange } = props
  return (
    <Col span={12}>
      <label className='filter'>Filters</label>
      <Select defaultValue='Quote Status' style={{ width: 180 }} onChange={handleChange}>
        <Option value='Quote Accepted'>Quote Accepted</Option>
        <Option value='Quote Requested'>Quote Requested</Option>
        <Option value='Quote Created'>Quote Created</Option>
      </Select>
    </Col>
  )
}

export default Filter
