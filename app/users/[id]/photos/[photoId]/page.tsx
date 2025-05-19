import React from 'react'

interface Props {
    params: { id: number; photoId: number}
}

const PhotoDetailPage = async ({params}: Props) => {

    const { id, photoId } = await params;

  return (
    <div>PhotoDetailPage {id} {photoId}</div>
  )
}

export default PhotoDetailPage