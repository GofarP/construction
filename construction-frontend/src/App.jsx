import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/frontend/home'
import About from './components/frontend/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
