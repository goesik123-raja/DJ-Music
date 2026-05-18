import React from "react";
import { useNavigate } from "react-router-dom";

import b1 from "./img/img 1.png";
import b2 from "./img/img 2.jpg";
import b3 from "./img/img 3.jpg";

import videoFile from "./Video/video1.mp4";

const Home = () => {
    const navigate = useNavigate();

    const HandleSubmit = (e) => {
        e.preventDefault();

        alert("Redirecting to User Page");
        navigate("/User");
    };


    return (
        <>
            <div className="color">
                <div className="video-container">
                    <video controls autoPlay muted loop className="video">
                        <source src={videoFile} type="video/mp4" />
                    </video>
                </div>

                {/* main page */}
                <div className="home-content">
                    <h1>Feel The Beat Live</h1>
                    <p>
                        Agaso brings the night alive with bold sounds and electric vibes.
                    </p>

                    <button
                        className="btn btn-primary"
                        onClick={HandleSubmit}
                    >
                        Book Now
                    </button>
                </div>


                <div className="home-content-1">
                    <h1>Meet agaso's vibe</h1>
                    <h3>Bold, electric, and alive—agaso brings the pulse of nightlife straight to your screen with<br></br>
                        neon beats and sharp visuals.</h3>
                    <p>150+
                        <br></br>
                        Top Djs
                    </p>
                    <h4> 50+
                        <br></br>
                        Trusted Worldwide
                    </h4>

                </div>

                <div className="img-0">
                    <img src={b1}></img>
                </div>

                {/* CLient say */}

                <div className="color">
                    <div className="client">
                        <h1>Our Client Say</h1>
                        <h3>Bold website templates that electrify your DJ brand's presence</h3>
                    </div>
                    <div className="img-1">
                        <img src={b2}></img>
                    </div>
                    <div className="img-2">
                        <img src={b3}></img>
                    </div>
                </div>

                <div className="color">
                    <div class="star-box">
                        <h2>Music Showcases</h2>
                        <p>Feature your latest mixes in a dynamic grid</p>
                    </div>
                </div>
                <div className="star-box2">
                    <h2>Event Focus</h2>
                    <p>Highlight upcoming gigs with bold visuals and interactive timelines.</p>
                </div>


                {/* Register */}

                <div className="register">
                    <h1>Get In</h1>
                    <h3>Touch for bookings, collabs, or just to say hi</h3>
                </div>

                {/* Contact */}
                <div>
                    <div className="contact-section">
                        <div className="contact-box">
                            <input type="text" placeholder="ENTER NAME" />
                            <input type="email" placeholder="ENTER EMAIL" />
                            <textarea placeholder="WRITE MESSAGE"></textarea>

                            <button>SEND MESSAGE</button>
                        </div>
                    </div>
                </div>





                {/* vibe page */}
                <div className="vibe">
                    <h1>Vibes Only</h1>
                    <h3>Real feedback from those who feel the beat</h3>
                </div>

                {/* Wrapper (important) */}
                <div className="star-container">

                    {/* Left Card */}
                    <div className="star-card">
                        <div className="stars">★★★★★</div>
                        <p>
                            The aggressive colors and sleek layout make my mixes pop.
                            Fans keep telling me how fresh the site looks!
                        </p>

                        <div className="profile">
                            <img src="https://i.pravatar.cc/50" alt="" />
                            <div>
                                <h4>DJ Luna</h4>
                                <span>LA</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="star-card">
                        <div className="stars">★★★★★</div>
                        <p>
                            The aggressive colors and sleek layout make my mixes pop.
                            Fans keep telling me how fresh the site looks!
                        </p>

                        <div className="profile">
                            <img src="https://i.pravatar.cc/50" alt="" />
                            <div>
                                <h4>DJ Luna</h4>
                                <span>LA</span>
                            </div>
                        </div>
                    </div>
                </div>



                <br></br><br></br><br></br>

        
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
    );
};

export default Home;