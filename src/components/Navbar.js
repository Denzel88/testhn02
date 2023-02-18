import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const[displayusername,displayusernameupdate]=useState('');

  
  useEffect(() =>{
      let username=sessionStorage.getItem('username');
      if(username==='' || username===null){
    
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
    {/*<div className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
                <div className='container-fluid'>
                <Link className='text-light' to={'/'}>Home</Link>
                <span style={{marginLeft:'80%'}}>Welcome <b>{displayusername}</b></span>
                <Link className='text-light' style={{ float: 'right' }} to={'/login'}>Logout</Link>
                </div>
  </div>*/}
           
    <nav className="navbar navbar-expand-lg bg-info">
    <div className="container-fluid">
      <h2 className="navbar-brand" >Welcome: <b>{displayusername}</b> </h2>
      <button className="navbar-toggler" type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <button className="btn btn-success m-2">
            <Link 
            className="text-white" 
            aria-current="page" 
            to="/">Home  
            </Link>
          </button>
          <button className="btn btn-success m-2">
          <Link
            className='text-white'
            aria-current="page" 
            to="/Client">Client
            </Link>
          </button>
          <button className="btn btn-success m-2">
          <Link  
            className='text-white'
            aria-current="page" 
            to="">Search
            </Link>
          </button>
        </ul>
        <div className='d-flex'>
        <button className="btn btn-success m-2">
        <Link className='text-light' style={{ float: 'right' }} to={'/login'}>Logout</Link>
          </button>
        </div>
      </div>
    </div>
  </nav>        
  </div>
  )
}

export default Navbar