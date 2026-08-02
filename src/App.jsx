import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage'
import AllProductPage from './pages/AllProductPage'
import CreateProductPage from './pages/CreateProductPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import UpdateProductPage from './pages/UpdateProductPage'
import PageNotFound from './pages/PageNotFound'
import Navbar from './componenets/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<AllProductPage />} />
        <Route path='/products/create' element={<CreateProductPage />} />
        <Route path='/products/:id' element={<ProductDetailsPage />} />
        <Route path='/products/:id/edit' element={<UpdateProductPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App