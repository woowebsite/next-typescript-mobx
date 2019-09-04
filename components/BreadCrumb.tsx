import * as React from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

type Props = {
  title?: string
}

const BreadCrumb: React.SFC<Props> = () => (
    <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
)

export default BreadCrumb