export const About = () =>{
    return (
        <div>
             <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Welcome to our website</p>
                        <h1>Why Choose us ?</h1>
                        <p>Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.
                            <br />
                            <br /> <br />
Customization: We understand that every business is unique. Thats why we create solutions that are tailored to your specific needs and goals.
<br /> <br /> <br />
Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns.
<br /> <br /> <br />
Affordability: We offer competitive pricing without compromising on the quality of our services.
<br /> <br /> <br />
Reliability: Count on us to be there when you need us. We are committed to ensuring your IT environment is reliable and available 24/7.
<br /> 
                            </p>
                            <div className="btn btn-group">
                             <a href="/contact">   <button className="btn">Connect now </button></a>
                             <a href="/services">   <button className="btn secondary-btn">Learn more </button></a>

                            </div>
                    </div>
                    {/* hero images */}
                    <div className="hero-image">
                        <img src="/images/about.png" alt="" width="500" height="500"  />
                    </div>
                </div>


            </section>
        </main>
        <section className="section-analytics">
            <div className="container grid grid-four-cols">
                <div className="div1">
                    <h2>50+</h2>
                    <p> registered companies</p>
                </div>
                <div className="div1">
                    <h2>10,000 +</h2>
                    <p>Happy Clients</p>
                </div>
                <div className="div1">
                    <h2>500+</h2>
                    <p>Well Known Developers</p>
                </div>
                <div className="div1">
                    <h2>24/7</h2>
                    <p>Service</p>
                </div>
            </div>
           
        </section>
        <section className="footer-section">
            <div className="footer">
                <p>All Rights Reserverd @Praveen 2024</p>
            </div>
        </section>
        </div>
    )
};