import { Link } from "react-router-dom"

const NavBar = () => {
   return (
      <>
         <nav className="navbar navbar-expand-lg bg-warning shadow">

            <div className="container-fluid">

               <Link className="navbar-brand" to="/">IMG</Link>

               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="navbarText">

                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/" onClick={() => {
                           window.scroll(0, 0);
                        }}>Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="about" onClick={() => {
                           window.scroll(0, 0);
                        }}>About</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="shop" onClick={() => {
                           window.scroll(0, 0);
                        }}>Shop</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="contact" onClick={() => {
                           window.scroll(0, 0);
                        }}>Contact Jansen</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="cart" onClick={() => {
                           window.scroll(0, 0);
                        }}>Cart</Link>
                     </li>
                  </ul>

                  <span class="navbar-text">
                     Dancing Jansen Jigs
                  </span>

               </div>
            </div>
         </nav>
      </>
   )
}

export default NavBar
