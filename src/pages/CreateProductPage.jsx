import { useState } from 'react'
import { createProduct } from '../services/productService'
import { useNavigate } from 'react-router'

function CreateProductPage() {

  const navigate = useNavigate()

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
      const createdProduct = await createProduct(formData)
      navigate('/products')
      set
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  return (
    <div>
      <h1>Create Product</h1>

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

export default CreateProductPage