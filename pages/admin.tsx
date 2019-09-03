import React, { Component } from 'react';
import Link from 'next/link'
import AdminLayout from '../components/AdminLayout';



export default (props) => {
  return (
    <AdminLayout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p><Link href='/about'><a>About</a></Link></p>
    </AdminLayout>
  )
}