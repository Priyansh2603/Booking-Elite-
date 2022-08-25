import React from 'react';

export default function Services() {
  return (
    <div>
    <section id="featured-services" className="featured-services section-bg">
        <div className="container">

            <div className="row no-gutters">
                <div className="col-lg-3 col-md-4">
                    <div className="icon-box">
                        <div className="icon"><i className="bi bi-laptop"></i></div>
                        <h4 className="title text-justify"><a href="/login">Register </a></h4>
                        <p className="description "> Registration of accessible buildings/ locations by the owners.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="icon-box">
                        <div className="icon"><i className="bi bi-geo-alt"></i></div>
                        <h4 className="title"><a href="/search">Navigation</a></h4>
                        <p className="description">Guidance with suitable voice-based announcements to navigate and reach the place.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="icon-box">
                        <div className="icon"><i className="bi bi-envelope"></i></div>
                        <h4 className="title"><a href="/">Feedback</a></h4>
                        <p className="description">Provide your feedback and help us improve.</p>
                    </div>
                </div>
                
            </div>
            <div className="col-lg-3 col-md-4">
                    <div className="icon-box">
                        <div className="icon"><i className="bi bi-envelope"></i></div>
                        <h4 className="title"><a href="https://creator.voiceflow.com/prototype/63076b1de2683573da9998b1">Chetna Help</a></h4>
                        <p className="description">Take help from our chatbot.</p>
                    </div>
                </div>
        </div>
    </section></div>
  )
}
