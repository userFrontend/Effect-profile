import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import PageError from './pages/NotFound/PageError'
import Auth from './pages/Auth/Auth'

function App() {


  
  return (
    <>
    <Header/>
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route index path='/auth' element={<Auth />}/>
      <Route index path='*' element={<PageError/>}/>
    </Routes>
    </>
  )
}

export default App
