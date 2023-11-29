import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Userlist from './compontens/Userlist';


function App() {
  const [users,setusers] = useState([
    
  ]);
  useEffect(() => {
    
  axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setusers(res.data));
  }, [])
  
  return (
    <div>
     
     <Userlist users={users}/>
    </div>
  );
}

export default App;
