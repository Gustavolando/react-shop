import React from 'react'
import ProductItem from '@components/ProductItem'
import useGetProducts from '@hooks/useGetProducts'
import '@styles/ProductList.scss'

const API = "https://api.escuelajs.co/api/v1/products"

const ProductList = () => {
  const products = useGetProducts(API)

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(product => {
          if (product.title === 'santiago-guallichico') {
            console.log(product);
          }
          if (product.images.length > 0 
            && product.images[0] !== '' 
            && product.images[0] !== 'asdfa'
            && product.images[0] !== 'asdfaf'
            && product.images[0] !== 'hjk'
            && product.images[0] !== 'none'
          ) {
            return (
              <ProductItem product={product} key={product.id}/>
            )
          }
        })}
      </div>
    </section>
  )
}

export default ProductList