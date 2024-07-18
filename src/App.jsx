
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import { Home } from './pages/home/Home'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
