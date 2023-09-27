import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateOrder from './pages/CreateOrder'

function OrderFeature() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CreateOrder />}></Route>
        <Route path='/order/create' element={<CreateOrder />}></Route>
      </Routes>
    </>
  )
}

export default OrderFeature
