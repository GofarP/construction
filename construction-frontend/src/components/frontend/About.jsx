import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {default as AboutNew} from '../common/About'

const About = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <section className="section-7">
                    <div className="hero d-flex align-items-center">
                        <div className="container">
                            <div className="text-left">
                                <span>Quality Integrity Value </span>
                                <h1>About Us</h1>
                                <p>We excel at transforming visions into reality through outstanding craftsmanship and precise</p>

                                <div className="mt-4">
                                    <a className="btn btn-primary large">Contact Now</a>
                                    <a className="btn btn-secondary ms-2 large">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AboutNew/>
                <section className="section-8">

                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};
export default About;
