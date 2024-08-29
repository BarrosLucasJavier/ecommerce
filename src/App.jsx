
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { Home } from './pages/home/Home'
import { MenuProvider } from './context/MenuProvider'
import { ProductsProvider } from './context/ProductsProvider'
import { Products } from './pages/products/Products'
import { ConfigProvider } from './context/ConfigProvider'

function App() {


  return (
    <ConfigProvider>
      <ProductsProvider>
        <MenuProvider>
          <Router>
            <Routes>
              <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='/products' element={<Products />}>
                </Route>
              </Route>
            </Routes>
          </Router>
        </MenuProvider>
      </ProductsProvider>
    </ConfigProvider>


  )
}

export default App
