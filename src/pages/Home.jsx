import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from "../components/User"

function  Home() {
   const [users, setUsers] = useState ([]);

    async function fetchUsers() {
          const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
         setUsers(data)
         console.log(data)
    };

useEffect(() => {
    setTimeout(()=> {
    fetchUsers();
    }, 500);
}, []);

const pixels = "2px";

return (
    <div>
    {users.map(() => {
    <User />
    })}  

</div>
);
    }

export default Home;