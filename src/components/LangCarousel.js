import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactJsLogo from '../assets/logo/ReactJs.png'
import CSS3Logo from '../assets/logo/CSS3.png'
import HTML5Logo from '../assets/logo/HTML5.png'
import GithubLogo from '../assets/logo/Github.png'
import MongoDbLogo from '../assets/logo/MongoDb.png'
import NodeJsLogo from '../assets/logo/nodeJs.png'
import CppLogo from '../assets/logo/cplus.png'
import BootstrapLogo from '../assets/logo/bootstrap.png'



const techSpam = [
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

const carouselMediaQuery={
    0: {
        items: 2,
 
    },
    600: {
        items: 3,
        nav: false
    },
    1000: {
        items: 5,
    }
}

function LangCarousel() {
    return (
        <>
            <div className="container">
                <h2 className='text-center m-4 fw-bold'>Tech Stack I'm Comfortable With</h2>
                <OwlCarousel className='owl-theme' loop margin={2} items={4}
                    autoplaySpeed={2000} autoplay responsive={carouselMediaQuery} >
                    {
                        techSpam.map((element, index) => {
                            return (
                                <div className='item' key={index}>
                                    <img src={element.src} alt={element.alt} width='115' height='115' />
                                </div>
                            )
                        })
                    }
                </OwlCarousel>
                <hr />
            </div>
        </>
    )
}

export default LangCarousel