import React from 'react'
import HeroImg  from '../assets/HeroImg.png'

function HeroSection() {
    return (
        <>
            <div class="container h-25">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={HeroImg} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div class="col-lg-6">
                        <p class="display-5  lh-1 mb-3">Hello,</p>
                        <h1 >I'm Aditya Raj Chauhan</h1>
                        <h3 className='text-primary' >Full Stack Developer</h3>
                        <h5>From India</h5>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Hire Me</button>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection