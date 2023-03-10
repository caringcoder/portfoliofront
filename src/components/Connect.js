import React, {useContext } from 'react'
import formContext from '../context/form/formContext';


function Connect() {
   
    const values = useContext(formContext)
    const {formData,formSuccessMsg,submitForm,handleOnChange} = values
    
    const handleSubmit = (e) => {
        e.preventDefault()
        submitForm()
    }

    return (
        <>
            <div className="container col-xl-10 col-xxl-8 px-4 py-1">

                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">Connect With Me</h1>
                        <p className="col-lg-10 fs-4">Hello, To Connect With me please enter your full name, email and your message to me. I'll reach you as soon as possible.</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light needs-validation text-dark" onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name='name' required value={formData.name} onChange={handleOnChange} />
                                <label htmlFor="floatingInput">Full Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" name='email' required value={formData.email} onChange={handleOnChange} />
                                <label htmlFor="floatingPassword" >Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" rows="3" name='message' required
                                    onChange={handleOnChange} value={formData.message}
                                ></textarea>
                                <label htmlFor="floatingTextarea" >Comments</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Send Message</button>
                            <hr className="my-4" />
                            {
                                formSuccessMsg !== true ?
                                    <small className="text-muted">By clicking Send Message, your message will be sent to me.</small>
                                    :
                                    <div className='d-flex justfiy-content-center align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="green" className="bi bi-check-circle-fill p-1" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                        </svg>
                                        <small className="text-muted fw-bold">Your Message has been submitted</small>
                                    </div>
                            }
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Connect