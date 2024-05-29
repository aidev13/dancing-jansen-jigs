import JigList from "./components/JigList"
import jigData from './data/jigData.js'
import Header from "./components/Header.jsx"
import Sandbox from "./components/Sandbox.jsx"

function App() {

   return (
      <>
         <Header />
         <div className="container">
            <JigList items={jigData} />
         </div>

         {/* <Sandbox /> */}
      </>
   )
}

export default App
