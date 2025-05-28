import React from 'react'
import UserTable from './UserTable'

interface Params {
  sortOrder: string
}

interface Props {
  searchParams: Promise<Params>
}

const UsersPage = async ({searchParams}: Props) => {

  const {sortOrder} = await searchParams


  return (
    <>
        <h1>Users</h1>
        <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage