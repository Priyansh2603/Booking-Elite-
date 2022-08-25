import React from 'react'

export default function Contact() {
  return (
    <div>  <section id="contact" className="contact">
    <div className="container">

        <div className="section-title">
            <h2>Contact</h2>
            <p>We can't just sit back and wait for feedback to be offered, particularly when we're in a leadership role. If we want feedback to take root in the culture, we need to explicitly ask for it.</p>
        </div>

        <div className="row">

            <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                    <div className="address">
                        <i className="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p>19th Km stone, Vijay Nagar, Ghaziabad</p>
                    </div>

                    <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>chetna2022@gmail.com</p>
                    </div>

                    <div className="phone">
                        <i className="bi bi-phone"></i>
                        <h4>Call:</h4>
                        <p>+91-</p>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.8203346690843!2d77.4466178801423!3d28.633790113150827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d4e3485ed%3A0xe0fe1689b57c7d2e!2sABESIT%20College%20Of%20Engineering!5e1!3m2!1sen!2sin!4v1660461034256!5m2!1sen!2sin" frameborder="0"  allowfullscreen></iframe>
                </div>

            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="" method="post" role="form" className="php-email-form">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" className="form-control" id="name" required />
                        </div>
                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label htmlFor="name">Your Email</label>
                            <input type="email" className="form-control" name="email" id="email" required />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="name">Feedback</label>
                        <input type="text" className="form-control" name="subject" id="subject" required />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="name">Comments</label>
                        <textarea className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Submit</button></div>
                </form>
            </div>

        </div>

    </div>
</section></div>
  )
}
