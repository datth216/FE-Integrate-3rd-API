import { Route, Routes } from 'react-router-dom'
import Error from '../../components/Error'
import CreateOrder from './pages/CreateOrder'

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
