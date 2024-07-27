import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Category from './pages/Category'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Footer from './components/Footer'
import bannermens from './assets/bannermens.png'
import bannerwomens from './assets/bannerwomens.png'
import bannerkids from './assets/bannerkids.png'

function App() {


  return (
    <>
      <main className=' bg-slate-100 text-tertiary'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mens' element={<Category category="men" banner={bannermens} />} />
            <Route path='/womens' element={<Category category="women" banner={bannerwomens} />} />
            <Route path='/kids' element={<Category category="kid" banner={bannerkids} />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart-page' element={<Cart />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
