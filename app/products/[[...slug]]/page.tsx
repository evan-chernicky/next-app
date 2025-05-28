import React from 'react'

interface Params {
  slug: string;
  sortOrder: string;
}

interface Props {
  params: Promise<Params>;
}

const ProductPage = async ({ params }: Props) => {

  const { slug, sortOrder } = await params; 

  return (
    <div>ProductPage {slug} {sortOrder}</div>
  )
}

export default ProductPage