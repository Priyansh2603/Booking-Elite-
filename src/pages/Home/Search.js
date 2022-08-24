import React from 'react'

export default function Search() {
  return (
    <div>      <section id="featured-services" className="featured-services section-bg">
    <div className="container">

        <div className="row no-gutters">
            <div className="col-lg-4 col-md-6">
                <div className="icon-box">
                    <div className="icon"><i className="bi bi-laptop"></i></div>
                    <h4 className="title text-justify"><a href="/login">Register </a></h4>
                    <p className="description "> Registration of accessible buildings/ locations by the owners.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="icon-box">
                    <div className="icon"><i className="bi bi-geo-alt"></i></div>
                    <h4 className="title"><a href="/">Navigation</a></h4>
                    <p className="description">Guidance with suitable voice-based announcements to navigate and reach the place.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="icon-box">
                    <div className="icon"><i className="bi bi-envelope"></i></div>
                    <h4 className="title"><a href="/">Feedback</a></h4>
                    <p className="description">Provide your feedback and help us improve.</p>
                </div>
            </div>
        </div>

    </div>
</section></div>
  )
}
