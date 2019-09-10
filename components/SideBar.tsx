import * as React from 'react'
import { Layout, Menu, Icon } from 'antd';
import Link from 'next/link';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

type Props = {
  title?: string
}

const SideBar: React.SFC<Props> = () => (
  <Sider width={200} style={{ background: '#fff' }}>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user" />
            Security
                </span>
        }
      >
        <Item key="1"><Link href="/users"><a>Users</a></Link></Item>
        <Item key="2">Roles</Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="laptop" />
            subnav 2
                </span>
        }
      >
        <Item key="5">option5</Item>
        <Item key="6">option6</Item>
        <Item key="7">option7</Item>
        <Item key="8">option8</Item>
      </SubMenu>
      <SubMenu
        key="sub3"
        title={
          <span>
            <Icon type="notification" />
            subnav 3
                </span>
        }
      >
        <Item key="9">option9</Item>
        <Item key="10">option10</Item>
        <Item key="11">option11</Item>
        <Item key="12">option12</Item>
      </SubMenu>
    </Menu>
  </Sider>
)

export default SideBar