import React from 'react'

interface Params {
  id: number
}

interface Props {
    params: Promise<Params>
}

const UserDetailPage = async ({params}: Props) => {

    const {id} = await params

  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage