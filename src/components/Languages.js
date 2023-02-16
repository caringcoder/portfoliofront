import React, { useEffect } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ReactJsLogo from '../assets/logo/ReactJs.png'
import CSS3Logo from '../assets/logo/CSS3.png'
import HTML5Logo from '../assets/logo/HTML5.png'
import GithubLogo from '../assets/logo/Github.png'
import MongoDbLogo from '../assets/logo/MongoDb.png'
import NodeJsLogo from '../assets/logo/nodeJs.png'
import CppLogo from '../assets/logo/cplus.png'
import BootstrapLogo from '../assets/logo/bootstrap.png'


const languagesSpam = [
    {
        name: "ReactJsLogo",
        src: ReactJsLogo,
        alt: "ReactJs"
    },
    {
        name: "Css3Logo",
        src: CSS3Logo,
        alt: "Css3"
    },
    {
        name: "Html5Logo",
        src: HTML5Logo,
        alt: "HTML5"
    },
    {
        name: "GithubLogo",
        src: GithubLogo,
        alt: "Github"
    },
    {
        name: "MongoDbLogo",
        src: MongoDbLogo,
        alt: "MongoDb"
    },
    {
        name: "NodeJsLogo",
        src: NodeJsLogo,
        alt: "NodeJs"
    },
    {
        name: "CplusLogo",
        src: CppLogo,
        alt: "Cpp"
    },
    {
        name: "BootstrapLogo",
        src: BootstrapLogo,
        alt: "Bootstrap"
    },
]



function Languages() {
    return (
        <>
            <div className="container ">
                <hr />
                <h2 className='text-center m-4'>Languages I'm Comfortable With</h2>

                <div className="container">
                    <CarouselProvider
                        naturalSlideWidth={5}
                        naturalSlideHeight={4}
                        totalSlides={8}
                        visibleSlides={4}
                        isPlaying={true}
                        infinite={true}
                        interval={2000}
                        children={8}
                        isIntrinsicHeight={true}
                    >

                        <Slider >
                            {
                                languagesSpam.map((element, index) => {
                                    return (
                                        <Slide index={index} key={index} >
                                            <img src={element.src} alt={element.alt} width='115' height='115' gap='2'  />
                                        </Slide>
                                    )
                                })
                            }

                            {/* <Slide index={0} >
                        <img src={ReactJsLogo} alt={"ReactJs"}  className='slideImg' style={{height: 'inherit'}}/>
                    </Slide>
                    <Slide index={1} >
                        <img src={ReactJsLogo} alt={"ReactJs"} className='slideImg' />
                    </Slide>
                    <Slide index={2} >
                        <img src={ReactJsLogo} alt={"ReactJs"}  className='slideImg'/>
                    </Slide>
                    <Slide index={3} >
                        <img src={ReactJsLogo} alt={"ReactJs"} className='slideImg' />
                    </Slide>
                    <Slide index={4} >
                        <img src={ReactJsLogo} alt={"ReactJs"} className='slideImg' />
                    </Slide>
                    <Slide index={5} >
                        <img src={ReactJsLogo} alt={"ReactJs"} className='slideImg' />
                    </Slide> */}
                        </Slider>
                    </CarouselProvider>
                </div>
            </div>
        </>
    )
}

export default Languages