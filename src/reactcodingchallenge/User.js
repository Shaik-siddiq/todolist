
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Userlist from './Userlist'

const User= () => {
    let [user, setUser] = useState({container:[], error:null});
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            setUser({...user, container:response.data},)
        })
        .catch((err)=>{setUser({...user, error:err})})
    },[])
    return (
        <div>
        <pre>{JSON.stringify(user.container)}</pre>
            <Userlist user={user.container} />
        </div>
    )
}

export default User
