import React, {useState, useEffect} from 'react'

const api = "https://randomuser.me/api"

function ObiWanCanCode() {

    const [data, setData] = useState(null)

    const fetchFromApi = async() => {
        let value = await fetch(api, {
            method: "GET",
            headers: {
                Accept : "application/json",
                "Content-Type": "application/json"
            }
        })
        let response = await value.json()
        setData(JSON.stringify(response))
    }
    
    useEffect(() => {
    //   fetchFromApi()    
    }, [])    

    return (
        <div className="YodiStyling">

            <div className="YodiDiv">

                <p>{data}</p>

                <button onClick={() => fetchFromApi()}>Fetch Random Data</button>


            </div>
        </div>
  )
}

export default ObiWanCanCode