import React from 'react'
import BtcFarm from '../assets/carouselImages/btcFarm.jpeg'
import Todo from '../assets/carouselImages/todo.jpeg'
import ResponseApp from '../assets/carouselImages/responseApp.png'




function MyWork() {
    return (
        <>
            <div className="container mx-auto">
                <h1 className='text-center m-2'>What I've Made</h1>
                <div className="row me-auto">
                    <div className="col-sm-4">
                        <div className="card">
                            <img src={BtcFarm} className="card-img-top" alt="BtcFarm" />
                            <div className="card-body">
                                <h5 className="card-title">BtcFarm - UI</h5>
                                <p className="card-text">A frontend website made using React Js.</p>
                                <p className='card-text'><strong>TechStack Used - ReactJs, Bootstrap</strong></p>
                                <a href="https://btcfarm.vercel.app/" target={'_blank'} className="btn btn-primary">Check Out
                                    <span className='align-items-center mx-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img src={Todo} className="card-img-top" alt="BtcFarm" />
                            <div className="card-body">
                                <h5 className="card-title">ToDo App</h5>
                                <p className="card-text">A simple Todo App that keeps your todo list.</p>
                                <p className='card-text'><strong>TechStack Used - ReactJs, Bootstrap</strong></p>
                                <a href="https://caringcoder.github.io/todo/"target={'_blank'} className="btn btn-primary">Check Out
                                <span className='align-items-center mx-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img src={ResponseApp} className="card-img-top" alt="BtcFarm" />
                            <div className="card-body">
                                <h5 className="card-title">BtcFarm - UI</h5>
                                <p className="card-text">A frontend website made using React Js.</p>
                                <p className='card-text'><strong>TechStack Used - ReactJs, Bootstrap</strong></p>
                                <a href="#" className="btn btn-primary">Check Out
                                <span className='align-items-center mx-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MyWork