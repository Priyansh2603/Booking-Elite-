import React from 'react'

export default function Footer() {
  return (
    <div> <footer id="footer">
    <div className="container">
        <h3>CHETNA</h3>
        <p className='text-light'>World is worried about the disability more than the disable people do.</p>
        <div className="social-links">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
        <div className="copyright">
            &copy; Copyright <strong><span>CHETNA</span></strong>. All Rights Reserved
        </div>
        <div className="credits">

            Designed by <a href="https://.com/">Team Chetna</a>
        </div>
    </div>
    
</footer>

<a href="/" className="back-to-top d-flex align-items-center justify-content-center text-blue"><i className="bi bi-arrow-up-short"></i></a>
</div>
  )
}
