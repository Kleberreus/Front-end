import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <Outlet/>
      <p>Footer</p>
    </>
  )
}

export default App
