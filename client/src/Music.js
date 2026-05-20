import './Music.css';

import g1 from './img/img 4.png';
import g2 from './img/img 5.png';

const Music = () => {
    return (
        <>
            <div className="Music">
                <div className="Music-1">
                    <h1>New Drops</h1>
                    <p>Fresh beats to fuel your night.</p>
                </div>
                <div className="dj">
                    <img src={g1} />
                </div>

                {/* TEXT */}
                <div className="Text">
                    <h1>Live sets</h1>
                    <h4>Experience the raw energy of my latest live performances, captured in high-energy<br></br>
                        mixes that bring the club vibe straight to your speakers.</h4>
                </div>


                <div className="dj2">
                    <img src={g2} />
                </div>

                <div className="dj3">
                    <h1>Collaborations</h1>
                    <h4>Working with fellow artists to push boundaries and create tracks that blend edgy<br></br>
                        beats with bold rhythms, perfect for any nightlife scene.</h4>
                </div>

                <div className="email">
                    <h1>Join agaso Beats</h1>
                    <p>Get fresh mixes and event alerts first   </p>
                </div>



                <div class="email-section">
                    <label>YOUR EMAIL</label>

                    <input type="email" placeholder="ENTER EMAIL" />

                    <button>SEND</button>
                </div>




                <section class="contact-section">

                    {/* <!-- LEFT SIDE --> */}
                    <div class="contact-left">
                        <h1>Get in</h1>
                        <p>
                            HIT US UP TO BOOK A SET OR CHAT ABOUT YOUR NEXT PARTY—
                            LET'S MAKE IT ELECTRIC.
                        </p>
                    </div>

                    {/* <!-- RIGHT SIDE --> */}
                    <div class="contact-right">
                        <form>
                            <input type="text" placeholder="ENTER NAME" required />
                            <input type="email" placeholder="ENTER EMAIL" required />
                            <textarea placeholder="WRITE MESSAGE" rows="5"></textarea>

                            <button type="submit">SEND MESSAGE</button>
                        </form>
                    </div>

                </section>







                {/* Footer Page */}
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
            </div>
        </>
    )
}
export default Music;