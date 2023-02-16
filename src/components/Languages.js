import React, { useEffect } from 'react'
import ReactJsLogo from '../assets/logo/ReactJs.png'
import CSS3Logo from '../assets/logo/CSS3.png'
import HTML5Logo from '../assets/logo/HTML5.png'
import GithubLogo from '../assets/logo/Github.png'
import MongoDbLogo from '../assets/logo/MongoDb.png'


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
]




function Languages() {
     

    return (
        <>
            <hr />
            {/* <div className="container">
                <div className="slider">
                    <div className="slide-track">
                        {
                            languagesSpam.map((element, index) => {
                                return (
                                    <div className="slide" key={index}>
                                        <img src={element.src} alt={element.alt} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default Languages