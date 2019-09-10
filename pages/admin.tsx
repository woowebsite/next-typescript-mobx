import React from 'react';
import Link from 'next/link'
import AdminLayout from '../components/AdminLayout';

export default (_props) => {
  return (
    <AdminLayout title="Home | Next.js + TypeScript Example" {..._props}>
      <h1>This is body of admin page 👋</h1>
      <p><Link href='/about'><a>About</a></Link></p>
    </AdminLayout>
  )
}