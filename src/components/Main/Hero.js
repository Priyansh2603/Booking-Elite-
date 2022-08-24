import React from 'react';
import './style.css';
export default function Hero() {
  return (
    <div><section id="hero">
    
    <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div className="carousel-inner" role="listbox">


        <div className="carousel-item active"  >
          <div className="carousel-container">
            <div className="container">
              <h2 className="animate__animated animate__fadeInDown">Welcome to <span>CHETNA</span></h2>
              <p className="animate__animated animate__fadeInUp">“My advice to disabled people would be, concentrate on things your disability doesn’t prevent you doing well, and don’t regret the things it interferes with. Don’t be disabled in spirit as well as physically.”</p>
              <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>


        {/* <div className="carousel-item active" >
          <div className="carousel-container">
            <div className="container">
              <h2 className="animate__animated animate__fadeInDown">Disability is a special ability</h2>
              <p className="animate__animated animate__fadeInUp">Your present circumstances don't determine where you can go, but they determine where you start from....</p>
              <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>


        <div className="carousel-item active" >
          <div className="carousel-container">
            <div className="container">
              <h2 className="animate__animated animate__fadeInDown">Celebrate for whatever you have</h2>
              <p className="animate__animated animate__fadeInUp">How a society treats its Disabled is the true measure of a civilization.</p>
              <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div> */}

      </div>

     
      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

    </div>

  </section>
  </div>
  
  )
}
