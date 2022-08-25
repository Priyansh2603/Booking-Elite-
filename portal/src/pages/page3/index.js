
import React from "react";

export default function Nav() {

  return (
    <div className="App">
      {/* var add = "DLF Mall of India"
      gotoLocation(){
        window.open("http://www.maps.google.com/q="+"add")
      } */}
    
     <header id="header" className={`d-flex align-items-center fixed-top `}>
                <div className="container d-flex align-items-center">
                <img className="mx-4 my-2" width="80" height="70" src="/assets/img/swa.png" alt="" />
                    <h1 className="logo ms-1 me-auto"><a href="/"><h1>CH<span id="blue">ETNA</span></h1></a></h1>

                    <nav id="navbar" className="navbar ">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#services">Search Places</a></li>
                            <li><a className="nav-link scrollto" href="https://creator.voiceflow.com/prototype/63076b1de2683573da9998b1" target="_blank">Help</a></li>
                            <li><a className="nav-link scrollto " href="#about">About</a></li>
                            

                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>

                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                        <img className="mx-4 my-2" width="80" height="60" src="assets/img/logo-1.png" alt="" />
                    </nav>
                </div>
            </header>
    </div>
  )
}

