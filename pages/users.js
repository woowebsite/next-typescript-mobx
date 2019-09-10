import React from 'react';
import AdminLayout from '../components/AdminLayout';
import ListPage from '../components/ListPage'

export default (_props) => {
  console.log("getData: ", _props);
  

  return (
    <AdminLayout title="Home | Next.js + TypeScript Example" {...this}>
      <h1>This is users page 👋</h1>
      <ListPage />
    </AdminLayout>
  )
}