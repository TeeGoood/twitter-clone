import { Outlet } from "react-router-dom"
import NavBar from "./nav/NavBar"

function App() {
  return (
    <div className='container flex flex-col'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
