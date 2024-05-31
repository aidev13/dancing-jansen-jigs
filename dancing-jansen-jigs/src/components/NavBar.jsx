import { Link } from "react-router-dom"

const NavBar = () => {
   return (
      <nav className="navParent">

         <Link to='home'>Home</Link>
         <Link to='about'>About</Link>
         <Link to='shop'>Shop</Link>
         <Link to='contact'>Contact</Link>
         <Link to='cart'>Cart</Link>

      </nav>
   )
}

export default NavBar
