import Storyboard from "../components/Storyboard"
import { useState } from "react"


const JigList = ({ items }) => {
   const [image, setImage] = useState('')

   const displayHandle = (Image) => {
      setImage(Image)
   }

   return (
      <>

         <div>Image of {image}</div>
         <div className="listContainer">

            {
               items.map((item, index) => (
                  <div className="card m-2" key={index}>
                     <div>
                        <h5 className="card-header">{item.name}</h5>
                        <div className="card-body">
                           <h5 className="card-title">This jig weighs {item.weight}</h5>

                           <p className="card-text">{item.text}</p>
                           <button onClick={() => displayHandle(item.img)}className="btn btn-danger">Click me</button>
                           <a href="#" className="btn btn-primary">Buy Now!</a>
                        </div>
                     </div>
                  </div>
               ))
            }
         </div>
      </>


   )
}

export default JigList
