import React from 'react'

interface Params {
  id: number,
  photoId: number
}

interface Props {
    params: Promise<Params>
}

const PhotoDetailPage = async ({params}: Props) => {

    const { id, photoId } = await params;

  return (
    <div>PhotoDetailPage {id} {photoId}</div>
  )
}

export default PhotoDetailPage