import React from 'react'
import Site from '../../resources/js/layouts/Site'
import { Card } from 'antd'
import ListUser from './components/listUser';

const indexPage = () => {
  return (
    <Site title="User Management" breadcrumbs={[{ title: 'Home', href: '/' }, { title: 'User Management', href: '/' }]}>
        <Card title="User Management">
            {/* <listUser users={users} /> */}
            <ListUser/>
        </Card>
    </Site>
  )
}

export default indexPage