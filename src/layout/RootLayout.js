import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div>
       <NavLink to="/">Home</NavLink>
        <Outlet/>
    </div>
  )
}

export default RootLayout
