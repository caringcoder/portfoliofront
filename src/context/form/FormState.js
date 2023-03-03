import React, { useState } from "react";
import axios from "axios";
import formContext from "./formContext";

const FormState = (props) => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [formSuccessMsg, setFormSuccessMsg] = useState(false)

    const submitForm = () => {
        const body = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        }
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.post('https://portfoliobackend-azure.vercel.app/connectus', body, config)
            .then(() => {/* console.log('Form Data Submitted To backend') */
            
            //Showing the message sent text
            setFormSuccessMsg(true)
                //Clearing the input values after submitting the form
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                })
            })
            .catch((err) => {/* console.log('Form Data Not Submitted To backend', err) */ })
    }

    const handleOnChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    return (
        <formContext.Provider value={{ formData, submitForm, formSuccessMsg, handleOnChange }}>
            {props.children}
        </formContext.Provider>
    )
}

export default FormState;