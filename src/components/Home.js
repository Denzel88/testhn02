import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const[displayusername,displayusernameupdate]=useState('');
    

    
    useEffect(() =>{
        let username=sessionStorage.getItem('username');
        if(username==='' || username===null){
            navigate('/login');
        }else{
            displayusernameupdate(username);
        }

        /*let jwttoken = sessionStorage.getItem('jwttoken');
        fetch("https://localhost:3000/Customer", {
            headers: {
                'Authorization': 'bearer ' + jwttoken
            }
        }).then((res) => {
            return res.json();
        }).then((resp) => {
            listupdate(resp);
        }).catch((err) => {
            console.log(err.messsage)
        });*/
    },[])
  return (
    <div>
            <h1 className="text-center">Welcome <b>{displayusername}</b></h1>
            <div className='container '>
            <div className='card'>
            <button type="button" className="btn btn-outline-primary m-2 col-md-2">Primary</button>
            <button type="button" className="btn btn-outline-primary m-2 col-md-2">Primary</button>
            <button type="button" className="btn btn-outline-primary m-2 col-lg-2">Primary</button>
            <button type="button" className="btn btn-outline-primary m-2 col-lg-2">Primary</button>
            <button type="button" className="btn btn-outline-primary m-2 col-lg-2">Primary</button>
            <button type="button" className="btn btn-outline-primary m-2 col-lg-2">Primary</button>
            </div>
            </div>
        </div>
  )
}

export default Home