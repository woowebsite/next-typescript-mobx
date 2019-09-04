import * as React from 'react'
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const { Item } = Menu

type Props = {
  title?: string
}

const HeaderLayout: React.SFC<Props> = () => (
  <Header className="header">
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      <Item key="1">Sales</Item>
      <Item key="2">Marketing</Item>
      <Item key="3">Customer</Item>
    </Menu>
  </Header>
)

export default HeaderLayout