import { Layout } from 'antd';
import { observer, inject } from 'mobx-react';
import { Store } from '../mobx/store'
import Head from 'next/head'
import moment from 'moment'
import SideBar from '../components/SideBar'
import BreadCrumb from '../components/BreadCrumb'
import HeaderLayout from '../components/HeaderLayout'

const { Content } = Layout;

interface AdminLayoutProps {
  children: any;
  store: Store;
  title?: string;
}

import React from 'react'
@inject('store') @observer
// @inject('crud-store') @observer
class AdminLayout extends React.Component<AdminLayoutProps> {
  render() {
    const { title, store, children } = this.props;
    let lastUpdateFormatDate = moment.unix(store.lastUpdate / 1000).format("MM/DD/YYYY HH:mm:ss")

    return <Layout>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <HeaderLayout />
      <Layout className="ant-layout-has-sider">
        <SideBar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <BreadCrumb />
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {lastUpdateFormatDate}
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  }

}


export default AdminLayout