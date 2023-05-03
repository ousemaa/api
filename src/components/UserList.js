import React, { useEffect, useState } from 'react'
import axios from "axios";
function UserList() {
useState [ users , setusers ] = useState([]); 
    useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    setusers(res.data)});
    
    }, [])
  return (
    <div>UserList</div>
  )
}

export default UserList