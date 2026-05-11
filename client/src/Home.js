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


                {/* Footer */}
                <footer class="dj-footer">
                    <div class="footer-container">

                        {/* <!-- Branding --> */}
                        <div class="footer-box">
                            <h2 class="logo">DJ Music</h2>
                            <p>
                                Bringing beats, vibes, and unforgettable nights.<br></br>
                                Stay connected for latest events & mixes.
                            </p>
                        </div>

                        {/* <!-- Contact --> */}
                        <div class="footer-box">
                            <h3>Contact</h3>
                            <p><i class="fas fa-phone"></i> +91 98765 43210</p>
                            <p><i class="fas fa-envelope"></i> djmusic@email.com</p>
                            <p><i class="fas fa-map-marker-alt"></i> Tamil Nadu, India</p>
                        </div>

                        {/* <!-- Social Media --> */}
                        <div class="footer-box">
                            <h3>Follow Us</h3>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Bottom --> */}
                    <div class="footer-bottom">
                        <p>© 2026 DJ Music | All Rights Reserved</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;