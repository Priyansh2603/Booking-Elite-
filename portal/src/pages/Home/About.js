import React from 'react'

export default function About() {
  return (
    <div><section id="about" className="about">
    <div className="container">

        <div className="section-title">
            <h2>About Us</h2>
            <p>"A bend in the road is not the  end of the road unless you fail to make the turn"  -Helen Keller</p>
        </div>

        <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
                <img src="assets/img/slide/slide-b.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>We are Chetna.  The kind of people who are relentless about our mission to help specially abled people to go anywhere and get anything.</h3>
                <p className="fst-italic">
                Movement is what we power.
                </p>
                <ul>
                    <li><i className="bi bi-check-circled"></i>It pushes us to constantly reimagine how we can help specially abled people to move better, and reach all the places they want to go for all the things they want to get . </li>
                    <li><i className="bi bi-check-circled"></i> We believe in a world where movement should be accessible to all . </li>
                    <li><i className="bi bi-check-circled"></i> We are a map - based platform widely accessible for storing and sharing information about buildings/ offices/ schools marketplaces having accessibility provision that are helpful for the specially abled .</li>
                </ul>
                <p>
We guide the specially abled people with suitable voice- based announcements to navigate and reach the places.
We enable the owners to register their property that have appropriate accessibility provision for the specially abled.
Chetna gives you an instant overview of your nearest accessible location on an interactive map. It is powered by us for specially abled users to access location for themselves, ensuring it works the way it shared it is easy and simple to use.
                </p>
            </div>
        </div>

    </div>
</section></div>
  )
}
