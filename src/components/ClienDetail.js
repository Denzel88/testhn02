import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ClienDetail = () => {
  const { clienid } = useParams();
  const [cliendata, clienChange] = useState({});

  useEffect(() => {
    /*let jwttoken = sessionStorage.getItem("jwttoken");
    fetch("http//localhost:3000/client/",{
    headers: {
      'Authorization': 'bearer ' + jwttoken
    }
  })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resp) => {
        clienChange(resp);
      })
      .catch((err) => {
        toast.error(err.message);
      });*/
      fetch("http://localhost:3000/client/"+clienid).then((res)=>{
            return res.json();
        }).then((resp)=>{
          clienChange(resp);
        }).catch((err)=>{
            toast.error(err.message);
        })
  }, []);

  return (
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Client Detail</h2>
          </div>
          <div className="card-body"></div>

          {cliendata && (
            <div>
              <h2>
                The client name is : <b>{cliendata.name}</b> ({cliendata.id})
              </h2>
              <h3>Client Details</h3>
              <h5>identi is : {cliendata.identi}</h5>
              <h5>emai is : {cliendata.email}</h5>
              <h5>Phone is : {cliendata.phone}</h5>
              <Link className="btn btn-danger" to="/client">
                Back to Listing
              </Link>
            </div> 
          )}
        </div>
      </div>
    </div>
  );
};

export default ClienDetail;
