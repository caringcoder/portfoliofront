import React, { useState } from 'react'
import axios from 'axios';


function Connect() {
    const [formData, setFormData] = useState({
        name: '', email: '', message: ''
    })
    const { name, email, message } = formData


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

        const body = {
            name: name,
            email: email,
            message: message
        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.post('https://portfoliobackend-azure.vercel.app/connectus',body,config)
        .then(()=>{console.log('Form Data Submitted To backend')})
        .catch((err)=>{console.log('Form Data Not Submitted To backend',err)})
    }

    const handleOnChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }




    return (
        <>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">Connect With Me</h1>
                        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light needs-validation" onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name='name' required value={name} onChange={handleOnChange} />
                                <label htmlFor="floatingInput">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" name='email' required value={email
                                } onChange={handleOnChange} />
                                <label htmlFor="floatingPassword" >Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" rows="3" name='message' required
                                    onChange={handleOnChange} value={message}
                                ></textarea>
                                <label htmlFor="floatingTextarea" >Comments</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Send Message</button>
                            <hr className="my-4" />
                            <small className="text-muted">By clicking Send Message, your message will be sent to me.</small>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Connect