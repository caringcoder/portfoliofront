import React, { useState, useEffect } from 'react'

function Visitor() {

    const [storedData, setStoredData] = useState({
        currentIp: '', totalVisit: '', unqiueVist: ''
    })

    const fetchData = async () => {
        const response = await fetch('https://portfoliobackend-azure.vercel.app/visitor')
        const data = await response.json()
        // console.log(data)

        setStoredData({
            currentIp: data.currentIp,
            totalVisit: (data.visitorList.totalVisits),
            unqiueVist: (data.visitorList.totalUniqueVisits),
        })
        // console.log(storedData)
    }

    const { currentIp, unqiueVist, totalVisit } = storedData
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="container ">
                <div className="row ">
                    <div className="col-md-4 text-center">
                        <h2>{totalVisit}</h2>
                        <p className="leading-relaxed">Total Visits</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2 >{unqiueVist}</h2>
                        <p className="leading-relaxed">Unique Visitors</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2 >{currentIp}</h2>
                        <p className="leading-relaxed">Your Ip</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Visitor