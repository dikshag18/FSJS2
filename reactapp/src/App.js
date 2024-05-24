import React, { useState } from "react"
import Card from "./card"
import Axios from "axios"


function App() {
    useState()
    const [details, setDetails] = useState({})
    const fetchDetails = async () => {
        const {data} = await Axios.get('https://randomuser.me/api')
        console.log("RESPONSE", data);

        const details = data.results[0]
        setDetails(details)
    }
    let list = ["Tushar", "Diksha", "Nikku"]
    
    return(
        <>
        <div>App</div>
        <Card myname="Tushar" list={list} details = {details}/>
        <button onClick={fetchDetails}>get Details</button>
        </>
    )
}
export default App
