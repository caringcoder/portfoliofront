import React, { useState, useEffect } from 'react'

function Visitor() {

    const [resData, setResData] = useState({})
    const [currentIp, setCurrentIp] = useState('')
    const [uniqueVisitor, setUniqueVisitor] = useState('')

    const fetchData = async () => {
        const response = await fetch('https://portfoliobackend-azure.vercel.app/visitor')
        const data = await response.json()
        setResData(data.visitorList)
        // console.log(resData)

        const list = data.visitorList

        //Getting the list of ip address
        const x = Array.from(list).map((element) => {
            return element.visitorIp
        })
        // console.log(x)

        // Finding unique ip address
        const unique = x.reduce(function (acc, curr) {
            if (!acc.includes(curr))
                acc.push(curr);
            return acc;
        }, []);
        // console.log(unique)
        setUniqueVisitor(unique.length)
        // console.log(uniqueVisitor)

        setCurrentIp(data.uniqueVisit.visitorIp)
        // console.log(currentIp)

        // console.log(resData.length)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="container ">
                <div className="row ">
                    <div className="col-md-4 text-center">
                        <h2 className="">{resData.length}</h2>
                        <p className="leading-relaxed">Total Visits</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2 className="">{uniqueVisitor}</h2>
                        <p className="leading-relaxed">Unique Visitors</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2 className="">{currentIp}</h2>
                        <p className="leading-relaxed">Your Ip</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Visitor