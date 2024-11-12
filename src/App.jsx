
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Error from './Components/Error'


function App() {

  return (
    <>
     <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<Error/>}/>

     </Routes>
    </>
  )
}

export default App
