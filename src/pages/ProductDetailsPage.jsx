import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { deleteProductByID, getProductById } from '../services/productService'

function ProductDetailsPage() {

  const [product, setProduct] = useState(null)

  const navigate = useNavigate()
  const { id } = useParams()

  async function handleDeleteProduct() {
    try {
      await deleteProductByID(id)
      navigate('/products')
    } catch (error) {
      console.error
    }
  }

  async function loadProductDetails() {
    try {
      const response = await getProductById(id)
      setProduct(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadProductDetails()
  }, [])

  return (
    <div>
      <h1>Product Details</h1>
      {product && (<>
        <p>Title: {product.title}</p>
        <p>Description: {product.description} </p>
        <p>Category: {product.category} </p>
        <p>Price: {product.price} </p>
        <p>Quantity: {product.quantity} </p>
        <button onClick={handleDeleteProduct}>Delete Pet</button>
        <button onClick={() => { navigate(`/products/${product._id}/edit`) }}>Edit Pet</button>
      </>
      )}
    </div>
  )
}

export default ProductDetailsPage