import React from 'react'
import HeroImg from '../assets/HeroImg.png'
import Typewriter from 'typewriter-effect';

function HeroSection() {
    return (
        <>
            <main>
                <div className="container h-25">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={HeroImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <p className="display-5 lh-1 mb-3 para">Hello,</p>
                            <h1 ><Typewriter
                                options={{
                                    strings: [`I'm Aditya Raj Chauhan`],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></h1>
                            <h3 className='text-primary' >Full Stack Developer</h3>
                            <h5>From India</h5>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" id='' className="btn btn-primary btn-lg px-4 me-md-2 hireButton">Hire Me</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </main>
        </>
    )
}

export default HeroSection