import { useState, useEffect } from 'react'
import { updateProduct, getProductById } from '../services/productService'
import { useNavigate, useParams } from 'react-router'

function UpdateProductPage() {

  const navigate = useNavigate()
  const { id } = useParams()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: 0,
    quantity: 0
  })

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  async function handleSubmit() {
    try {
      event.preventDefault()
      const updatedProduct = await updateProduct(id, formData)
      navigate('/products')
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  async function loadProductDetails() {
    try {
      const response = await getProductById(id)
      setFormData(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadProductDetails()
  }, [])


  return (
    <div>
      <h1>Update Product</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" onChange={handleChange} value={formData.title} />

        <label htmlFor="description">Description:</label>
        <input type="text" name="description" id="description" onChange={handleChange} value={formData.description} />

        <label htmlFor="category">Category:</label>
        <input type="text" name="category" id="category" onChange={handleChange} value={formData.category} />

        <label htmlFor="price">Price:</label>
        <input type="number" name="price" id="price" onChange={handleChange} value={formData.price} />

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" name="quantity" id="quantity" onChange={handleChange} value={formData.quantity} />

        <button>Submit</button>

      </form>
    </div>
  )
}

export default UpdateProductPage