import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

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
        <Link href="/users/new" className="btn">New User</Link>
        <Suspense fallback={<p>Loading...</p>}>
          <UserTable sortOrder={sortOrder}/>
        </Suspense>
    </>
  )
}

export default UsersPage