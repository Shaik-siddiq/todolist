import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Display from './Display'

const Axiosapi =() => {
    const [details, setDetails]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{setDetails([...details, res.data])})
        .catch((err)=>{console.log(err)})
    })

    return (
        <div>
        <pre>{JSON.stringify(details)}</pre>
            <Display display={details} />
        </div>
    )
}

export default Axiosapi
