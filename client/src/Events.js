import './Events.css';

import g1 from "./img/img 7.png";
import g2 from "./img/img 8.jpg";
import g3 from "./img/img 9.jpg";


const Events = () => {
    return (

        <>
            <div className='Events'>
                <div class="container py-5">
                    <div class="row g-4">

                        {/* <!-- Card 1 --> */}
                        <div class="col-md-4">
                            <div class="ticket-card">
                                <img src={g1} class="card-img-top" />

                                <div class="card-body">
                                    <h3>Early Access</h3>
                                    <p>Get in before the rush with this exclusive early entry ticket.</p>
                                    <h2 class="price">15$</h2>
                                    <button class="btn-custom">BUY NOW</button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div class="col-md-4">
                            <div class="ticket-card">
                                <img src={g2} class="card-img-top" />

                                <div class="card-body">
                                    <h3>Standard Pass</h3>
                                    <p>Full access to the night’s high-energy DJ sets and dance floor.</p>
                                    <h2 class="price">25$</h2>
                                    <button class="btn-custom">GET TICKET</button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div class="col-md-4">
                            <div class="ticket-card">
                                <img src={g3} class="card-img-top" />

                                <div class="card-body">
                                    <h3>VIP Experience</h3>
                                    <p>Exclusive backstage access plus premium drinks and seating.</p>
                                    <h2 class="price">60$</h2>
                                    <button class="btn-custom">RESERVE NOW</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>








            <section class="location-section">
                <div class="container">

                    <div class="row align-items-start">

                        {/* <!-- Left Side --> */}
                        <div class="col-md-7">
                            <h1 class="title">Location Vibes</h1>
                            <p class="desc">
                                OUR EVENTS PULSE AT THE HEART OF THE CITY, WHERE NEON LIGHTS
                                MEET THE NIGHT'S ELECTRIC ENERGY.
                            </p>
                        </div>

                        {/* <!-- Right Side --> */}
                        <div class="col-md-5">
                            <div class="info-box">
                                <h5>Address</h5>
                                <p>123 NEON ST, CLUB DISTRICT</p>

                                <h5 class="mt-4">Hours</h5>
                                <p>9PM - 4AM</p>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Map --> */}
                    <div class="map-box mt-5">
                        <iframe
                            src="https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0">
                        </iframe>
                    </div>

                </div>
            </section>





            <section class="book-now-section d-flex align-items-center justify-content-center text-center">

                <div>
                    <h1 class="book-title">Book Now</h1>

                    <p class="book-sub">
                        SECURE YOUR SPOT AT THE HOTTEST EVENTS WITH AGASO'S EASY RESERVATION.
                    </p>

                    <button class="reserve-btn">RESERVE</button>
                </div>

            </section>







            <footer class="footer">
                <div class="footer-container">

                    {/* <!-- Left Section --> */}
                    <div class="footer-col">
                        <div class="footer-logo">DJ Music</div>
                        <p class="footer-text">
                            Bringing beats, vibes, and unforgettable nights.
                            Stay connected for latest events & mixes.
                        </p>
                        <h3 class="footer-title">Music Letter</h3>
                        <div class="newsletter">
                            <input type="email" placeholder="Your email address" />
                            <button>Subscribe</button>
                        </div>
                    </div>

                    {/* <!-- My Account --> */}
                    <div class="footer-col">
                        <h3 class="footer-title">Social Media</h3>
                        <ul class="footer-links">
                            <li><a href=""><i class="fa-brands fa-instagram" /></a>Instagram</li>
                            <li><a href="#"><i class="fa-brands fa-x-twitter" /></a>YouTube</li>
                            <li><a href="#"><i class="fa-brands fa-spotify" /></a>Spotify</li>
                            <li><a href="#"><i class="fa-brands fa-facebook-f" /></a>Facebook</li>
                        </ul>
                    </div>

                    {/* <!-- Information --> */}
                    <div class="footer-col">
                        <h3 class="footer-title">Information</h3>
                        <ul class="footer-links">
                            <li><a href="#"><i class="fa-solid fa-address-card"></i>About Us</a></li>
                            <li><a href="#"><i class="fa-solid fa-calendar-days"></i>Events</a></li>
                            <li><a href="#"><i class="fa-solid fa-ticket"></i>Bookings</a></li>
                            <li><a href="#"><i class="fa-solid fa-envelope"></i>Contact</a></li>
                        </ul>
                    </div>

                    {/* <!-- Contact --> */}
                    <div class="footer-col">
                        <h3 class="footer-title">Contact</h3>
                        <div class="contact-item">
                            <p><i class="fa-solid fa-location-dot"></i>
                                Madurai, Tamil Nadu
                            </p>
                        </div>
                        <div class="contact-item">
                            <p><i class="fa-solid fa-phone"></i> +91 98765 43210</p>
                        </div>
                        <div class="contact-item">
                            <p><i class="fa-regular fa-envelope"></i>djmusic@email.com</p>
                        </div>
                        <div class="social-icons">
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}
export default Events;