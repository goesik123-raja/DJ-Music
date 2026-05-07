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









                {/* Footer */}



                <footer class="footer">

                    <div class="footer-container">

                        {/* <!-- LOGO / ABOUT --> */}
                        <div class="footer-box">
                            <h2 class="logo">DJ Music</h2>
                            <p>
                                Bringing beats, vibes, and unforgettable nights.
                                Stay connected for latest events & music.
                            </p>
                        </div>

                        {/* <!-- QUICK LINKS --> */}
                        <div class="footer-box">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Music</a></li>
                                <li><a href="#">Gallery</a></li>
                            </ul>
                        </div>

                        {/* <!-- CONTACT --> */}
                        <div class="footer-box">
                            <h3>Contact</h3>
                            <p>Email: dj@example.com</p>
                            <p>Phone: +91 98765 43210</p>
                        </div>

                        {/* <!-- SOCIAL --> */}
                        <div class="footer-box">
                            <h3>Follow</h3>
                            <div class="socials">
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                                <a href="#"><i class="fa-brands fa-spotify"></i></a>
                            </div>
                        </div>

                    </div>

                    {/* <!-- BOTTOM --> */}
                    <div class="footer-bottom">
                        <p>© 2026 DJ Music | All Rights Reserved</p>
                    </div>

                </footer>


            </div>
        </>
    )
}
export default Music;