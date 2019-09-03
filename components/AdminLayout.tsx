import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import Head from 'next/head'
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
import { Store } from '../mobx/store'

interface AdminLayoutProps {
  children: any;
  store: Store;
  title?: string;
}


export const AdminLayout = ({ title, children, store }: AdminLayoutProps) =>
  <Layout>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Sales</Menu.Item>
        <Menu.Item key="2">Marketing</Menu.Item>
        <Menu.Item key="3">Customer</Menu.Item>
      </Menu>
    </Header>
    <Layout className="ant-layout-has-sider">
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
            <Menu.Item key="1">Users</Menu.Item>
            <Menu.Item key="2">Roles</Menu.Item>
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
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
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
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {store.lastUpdate}
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>


export default inject('store')(observer(AdminLayout))
