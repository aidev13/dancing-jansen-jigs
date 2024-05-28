

const JigList = ({ items }) => {


   return (

      <>
         {
            items.map((item, index) => (
               <div className="card m-2" key={index}>
                  <div>
                     <h5 className="card-header">{item.name}</h5>
                     <div className="card-body">
                        <h5 className="card-title">This jig weighs {item.weight}</h5>
                        <p className="card-text">{item.text}</p>
                        <a href="#" className="btn btn-primary">Buy Now!</a>
                     </div>
                  </div>
               </div>
            ))
         }
      </>


   )
}

export default JigList
