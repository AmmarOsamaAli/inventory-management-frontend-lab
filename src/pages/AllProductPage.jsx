import { useState, useEffect } from 'react'
import { getAllProducts } from '../services/productService'
import { Link } from 'react-router'

function AllProductPage() {

  const [products, setProducts] = useState([])

  async function loadProducts() {
    try {
      const response = await getAllProducts()
      setProducts(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div>
      <h1>All Products</h1>
      {products.map((oneProduct) =>
        <div key={oneProduct._id}>
          <p>{oneProduct.title}</p>
          <Link to={`/products/${oneProduct._id}`}>See Product Details</Link>
        </div>
      )}
    </div>
  )
}

export default AllProductPage