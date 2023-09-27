import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateOrder from './pages/CreateOrder'
import Error from '../../components/Error'

function OrderFeature() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CreateOrder />}></Route>
        <Route path='/order' element={<CreateOrder />}></Route>
        <Route path='/order/create' element={<CreateOrder />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </>
  )
}

export default OrderFeature
