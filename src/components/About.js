import React from 'react'
import astroWithLaptop from '../assets/astrowithlaptop.png'
import CV from '../cv/myCV.pdf'

function About() {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={astroWithLaptop} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="text-white mb-4">My Real Life is Up to You? I am a <span className="color-base">MERN Stack Developer</span>
                        </h2>
                        <p>I’m a Front-end Developer and graphic designer living in India. I spend my days with my hands in many different areas of UI development from back end programming to front end engineering.
                        </p>
                        <div className="row">
                            <div className="col-md-6 about-bullet">
                                <ul className="bullet-check">
                                    <li>Full Stack Development</li>
                                    <li>Custom UI Components</li>
                                    <li>REST API</li>
                                </ul>
                            </div>
                            {/* <div className="col-md-6 about-bullet">
                                <ul className="bullet-check">
                                    <li>Graphic designer living</li>
                                    <li>Jiusmod tempor incididunt</li>
                                </ul>
                            </div> */}
                        </div>
                        <a href={CV} className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" role="button" aria-pressed="true" target={'_blank'} rel={'noreferrer'} download={"Aditya_Raj_Chauhan_Cv"}>Download CV</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About