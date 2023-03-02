import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BtcFarm from '../assets/carouselImages/btcFarm.jpeg'
import Todo from '../assets/carouselImages/todo.jpeg'
import responseApp from '../assets/carouselImages/responseApp.jpeg'
import textUtils from '../assets/carouselImages/textUtils.jpeg'
import aboutUs from '../assets/carouselImages/aboutUs.jpeg'
import maccoin from '../assets/carouselImages/maccoin.jpeg'
import wallet from '../assets/carouselImages/wallet.jpeg'
import trontry from '../assets/carouselImages/trontry.jpeg'
import leaderboard from '../assets/carouselImages/leaderboard.jpeg'

const porjects = [
    {
        name: "BtcFarm",
        src: BtcFarm,
        alt: 'BtcFarm',
        href: "https://btcfarm.vercel.app/",
        title: "BtcFarm - UI",
        desc: "A frontend website made using React Js.",
        techStack: "TechStack Used - ReactJs, Bootstrap",
    },
    {
        name: "ToDo",
        src: Todo,
        alt: 'ToDo',
        href: "https://caringcoder.github.io/todo/",
        title: "ToDo App",
        desc: "A simple Todo App that keeps your todo list.",
        techStack: "TechStack Used - ReactJs, Bootstrap",
    },
    {
        name: "TextUtils",
        src: textUtils,
        alt: 'TextUtils',
        href: "https://textutils-b9k4w4zc6-caringcoder.vercel.app/",
        title: "TextUtils",
        desc: "A simple text-utility based site.",
        techStack: "TechStack Used - ReactJs, Bootstrap",
    },
    {
        name: "About Us",
        src: aboutUs,
        alt: "About Us",
        href: "https://lunchmoney.io/about-us.html",
        title: "About Us (Landing Page)",
        desc: "A landing About Us page",
        techStack: "TechStack Used - HTML5 and CSS3"
    },
    {
        name: "Maccoin",
        src: maccoin,
        alt: "Maccoin",
        href: "https://maccoin.vercel.app/",
        title: "Template Editing",
        desc: "Edited the content of this website as per the request",
        techStack: "TechStack Used - HTML5 and CSS3"
    },
    {
        name: "Trontry",
        src: trontry,
        alt: "Trontry",
        href: "#",
        title: "Template Editing",
        desc: "Edited the content of this website as per the request",
        techStack: "TechStack Used - HTML5 and CSS3"
    },
    {
        name: "Wallet",
        src: wallet,
        alt: "Wallet Page",
        href: "https://wallet-two-nu.vercel.app/",
        title: "Wallet (Landing Page)",
        desc: "Created a wallet page as per the request",
        techStack: "TechStack Used - HTML5 and CSS3"
    },
    {
        name: "Leaderboard",
        src: leaderboard,
        alt: "LeaderBoard Page",
        href: "https://leaderboard-woad.vercel.app/",
        title: "Leaderboard (Landing Page)",
        desc: "Created a leaderboard page as per the request",
        techStack: "TechStack Used - HTML5 and CSS3"
    },
    {
        name: "Response",
        src: responseApp,
        alt: 'Response App',
        href: "https://responseform.vercel.app/",
        title: "Response App",
        desc: "A simple response site that takes your response.",
        techStack: "TechStack Used - ReactJs, Bootstrap, MongoDb & Express",
    }
]
const carouselMediaQuery = {
    0: {
        items: 1,
    },
    600: {
        items: 2,
    },
    1000: {
        items: 3,
    }
}

function MyWork() {
    return (
        <>
            <div className="container">
                <h1 className='text-center m-2'>Projects I've Worked On</h1>
                {/* <div className="row mx-auto">
                    {
                        porjects.map((element, index) => {
                            return (
                                <div className="col-sm-4 my-2" key={index}>
                                    <div className="card">
                                        <img src={element.src} className="card-img-top" alt={element.alt} />
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">{element.title}</h5>
                                            <p className="card-text">{element.desc}</p>
                                            <p className='card-text'><strong>{element.techStack}</strong></p>
                                            <a href={element.href} target={'_blank'} rel='noreferrer' className="btn btn-primary">Check Out
                                                <span className='align-items-center mx-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> */}
                {
                    <OwlCarousel className='owl-theme' loop margin={2} items={4}
                    autoplaySpeed={1000} autoplay responsive={carouselMediaQuery} >
                        {
                            porjects.map((element, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <div className="col-sm-12 my-2">
                                            <div className="card mx-1">
                                                <img src={element.src} className="card-img-top" alt={element.alt}  />
                                                <div className="card-body">
                                                    <h5 className="card-title fw-bold">{element.title}</h5>
                                                    <p className="card-text">{element.desc}</p>
                                                    <p className='card-text'><strong>{element.techStack}</strong></p>
                                                    <a href={element.href} target={'_blank'} rel='noreferrer' className="btn btn-primary">Check Out
                                                        <span className='align-items-center mx-2'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>}
                <hr />
            </div>
        </>
    )
}

export default MyWork
