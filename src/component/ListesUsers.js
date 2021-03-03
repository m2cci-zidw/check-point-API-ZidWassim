import React,{useEffect, useState} from 'react'
import CardUser from './CardUser'

import  axios  from 'axios';


const ListesUsers = () => {
    const [users, setUsers] = useState([])

    const getUsers=()=>{
      
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => response.data)
        .then(resData => setUsers(resData))
        .catch(error=>`this is ${error}`)
    }
    useEffect(() => {
        getUsers()
       
    }, [])
    // console.log (users)
    return (
        <div >
            <h1> Listes Of Users</h1>
           
               
            <div className="ListUsers">
            {users.map(user=>
                    <CardUser user={user}  key={user.id}   />  
               )}
            </div>
              
              
            
        </div>
    )
}

export default ListesUsers
