export const COLUMNS = [
  {
    title: 'Origin',
    dataIndex: 'origin',
    key: 'origin'
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: 'destination'
  },
  {
    title: 'Cargo Details',
    dataIndex: 'cargo_disc',
    key: 'cargo_disc'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action'
  }
]

export const reverse = (str) => str.split('').reverse().join('')
