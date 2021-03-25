import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'

function Listuserr() {
    const [user, setUser] = useState([])
    useEffect(() => {
        
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then(res=>setUser(res.data))
       .catch(err=>console.error(err))
    }, [])
    console.log(user)
    return (
        <div>
           <ul>
               {user.map(el=> <li key={el.id}> {el.name} </li>)}
           </ul>
        </div>
    )
}

export default Listuserr


