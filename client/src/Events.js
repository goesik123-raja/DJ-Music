import './Events.css';

const Events = () => {
    return (

        <>
            <div className='Events'>
                <div class="container py-5">
                    <div class="row g-4">

                        {/* <!-- Card 1 --> */}
                        <div class="col-md-4">
                            <div class="ticket-card">
                                <img src="https://picsum.photos/400/300?1" class="card-img-top" />

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
                                <img src="https://picsum.photos/400/300?2" class="card-img-top" />

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
                                <img src="https://picsum.photos/400/300?3" class="card-img-top" />

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
                        SECURE YOUR SPOT AT THE HOTTEST EVENTS WITH AGASO’S EASY RESERVATION.
                    </p>

                    <button class="reserve-btn">RESERVE</button>
                </div>

            </section>





            <section class="contact-section">
                <div class="container">

                    <div class="row">

                        {/* <!-- Left --> */}
                        <div class="col-md-4">
                            <h2 class="contact-title">Contact</h2>
                            <p class="contact-text">HIT US UP FOR BOOKINGS AND COLLABS</p>

                            <div class="social-icons mt-4">
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-tiktok"></i>
                                <i class="fab fa-x-twitter"></i>
                            </div>

                            <p class="copyright mt-5">© 2025. ALL RIGHTS RESERVED.</p>
                        </div>

                        {/* <!-- Middle --> */}
                        <div class="col-md-4">
                            <h6>EMAIL</h6>
                            <p>+1-555-AGASO99</p>
                            <p>HELLO@AGASO.DJ</p>
                        </div>

                        {/* <!-- Right --> */}
                        <div class="col-md-4">
                            <h6>CALLING</h6>

                            <label class="mb-2">YOUR EMAIL</label>
                            <input type="text" placeholder="ENTER EMAIL" class="email-box" />

                            <button class="send-btn mt-3">SEND</button>
                        </div>

                    </div>

                </div>
            </section>





        </>

    )
}
export default Events;