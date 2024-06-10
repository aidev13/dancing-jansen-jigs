import "../../Styles/home.css"
import Reviews from "../reviews/Reviews"

const Home = () => {
   return (
      <>
        <div class="card text-bg-light hero">
            <img src="/public/walleye_bg.jpg" class="card-img" alt="..." />
            <div class="card-img-overlay">
               <h5 class="card-title ">This is just a placehoder </h5>
               <p class="card-text ">I do not own the rights to the photo</p>
               <p class="card-text"><small>I will take down when needed or when told to</small></p>
            </div>
         </div>

         <svg className="hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffc107" fill-opacity="1" d="M0,20L1440,125L1440,0L0,0Z"></path></svg>

         <section className="container mb-5">
            <div className="container-body m-4">
               <h1>Welcome to Dancing Jansen Jig</h1>
               <p>Homegrown jigs made right here in the USA</p>
               
               {/*
                I am using a href here to rerender the page on purpose 
                */}

               <a href='./shop' className='text-light text-decoration-none'>
                  <button className="btn btn-warning shop-call-to-action">
                     Shop Now!
                  </button>
               </a>


            </div>
         </section>


         <section className="container">
            <h2>From the owner:</h2>
            <img src="" alt="" />
            <p className='shadows-into-light-regular m- mb-5 ms-5 fs-4'>"For years, I've been living my dream of crafting handmade jigs, a passion that began with a love for fishing and a dedication to quality. Each jig is meticulously handcrafted right here in the USA, designed and customized for the discerning fisherman who demands the best. Thank you for supporting my journey and sharing in the joy of exceptional, tailor-made fishing gear."</p>
         </section>
         

                     <Reviews />


         <div class="container text-center">
            <div class="row">
               <div class="col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, minima sit. Magni voluptatum hic sequi accusantium ab, eveniet tempore nisi repellat neque. Reiciendis provident nemo cum quas commodi molestias possimus!</div>
               <div class="col-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quo nostrum ratione ipsa optio aliquid deleniti dicta officia, ipsam placeat ea earum magni quibusdam impedit rerum id? Quaerat, minima explicabo.</div>
            </div>
         </div>

         

      </>
   )
}

export default Home
