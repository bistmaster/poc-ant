import React, { useEffect, useState, useRef } from 'react'
import { Table, Icon, Col, Button, Row, Select, Card } from 'antd'
import axios from 'axios'
import { COLUMNS, reverse } from '../utils'
import './Quotes.css'
const { Option } = Select

const Quotes = () => {
  const [items, setItems] = useState([])
  const ref = useRef()

  async function fetchData () {
    const response = await axios.get('http://www.mocky.io/v2/5dafc7fa2f00005c00c1363d')
    const { data } = response
    let uuid = 0
    const cargos = data.map(cargo => {
      cargo.uuid = uuid++
      cargo.origin = reverse(cargo.origin)
      cargo.destination = reverse(cargo.destination)
      cargo.cargo_disc = reverse(cargo.cargo_disc)
      cargo.status = reverse(cargo.status)
      cargo.action = <Icon type='more' />
      return cargo
    })
    ref.current = cargos
    setItems(cargos)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleChange = (qouteStatus) => {
    const newItems = ref.current.filter(item => item.status === qouteStatus)
    setItems(newItems)
  }

  return (
    <Card title='Quotes' bordered={false} style={{ width: 1000 }}>
      <Row justify='start' type='flex'>
        <Col span={12}>
          <label className='filter'>Filters</label>
          <Select defaultValue='Quote Status' style={{ width: 180 }} onChange={handleChange}>
            <Option value='Quote Accepted'>Quote Accepted</Option>
            <Option value='Quote Requested'>Quote Requested</Option>
            <Option value='Quote Created'>Quote Created</Option>
          </Select>
        </Col>
        <Col span={12}>
          <Button type='primary'>Request Quote</Button>
        </Col>
      </Row>
      <Table dataSource={items} columns={COLUMNS} size='middle' rowKey={record => record.uuid} rowClassName={(record, index) => index % 2 === 0 ? 'rowEven' : 'rowOdd'} />
    </Card>
  )
}

export default Quotes
