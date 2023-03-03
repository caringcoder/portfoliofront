import React, { useState } from "react";
import alertConext from "./alertContext";

const AlertState = (props) => {

    const [alert, setAlert] = useState(true)

    const hideAlert = () => {
        setTimeout(() => {
            setAlert(null)
        }, 5000);
    }

    return (
        <alertConext.Provider value={{ alert, hideAlert }}>
            {props.children}
        </alertConext.Provider>
    )
}

export default AlertState;