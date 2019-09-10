import * as React from 'react'
import EditableTable from './TableConnection/EditableTable'

type Props = {
  title?: string
}

const ListPage: React.SFC<Props> = () => (
  <div>
      <EditableTable />
  </div>
)

export default ListPage