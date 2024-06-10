import { useState } from "react"


const JigList = ({ items }) => {
   const [image, setImage] = useState()

   const displayHandle = (Image) => {
      setImage(Image)
   }

   return (
      <>
         <div className="listContainer">

            <div className="imgCol">
               <div className="stay">
                  <img src={image} />
               </div>
            </div>

            <div className="listCol">
               {
                  items.map((item, index) => (
                     <div className="card m-2" key={index}>

                        <h5 className="card-header">{item.name}</h5>

                        <div className="card-body">
                           <h5 className="card-title">This jig weighs {item.weight}</h5>

                           <p className="card-text">{item.text}</p>

                           <button onClick={() => displayHandle(item.img)} className="btn btn-warning">Click me</button>
                        </div>

                     </div>
                  ))
               }
            </div>
         </div>
      </>


   )
}

export default JigList
