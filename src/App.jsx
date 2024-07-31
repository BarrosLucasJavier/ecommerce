
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { Home } from './pages/home/Home'
import { MenuProvider } from './context/MenuProvider'
import { ProductsProvider } from './context/ProductsProvider'

function App() {
  

  return (
    <ProductsProvider>
      <MenuProvider>
        <Router>
          <Routes>
            <Route path='/' element={<MainLayout/>}>
              <Route index element={<Home/>}/>
            </Route>
          </Routes>
        </Router>
      </MenuProvider>
    </ProductsProvider>
    
  )
}

export default App
