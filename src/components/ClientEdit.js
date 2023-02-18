import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const ClientEdit = () => {
    const{ clienid } = useParams();

    useEffect(() => {
        //let jwttoken = sessionStorage.getItem("jwttoken");
        fetch("http://localhost:3000/client/" + clienid).then((res)=>{
            return res.json();
        }).then((resp)=>{
            //setId(resp.id);
            setIdenti(resp.identi);
            setName(resp.name);
            setLastName(resp.lastName);
            setEmail(resp.email);
            setPhone(resp.phone);
            setAddress(resp.address);
            setGender(resp.gender);
        }).catch((err)=>{
          toast.error(err.message);
        })
        //comprobar
        /*fetch("http://localhost:3000/client/"+clienid).then((res)=>{
            return res.json();
        }).then((resp)=>{
          clienChange(resp);
        }).catch((err)=>{
            toast.error(err.message);
        })*/
    }, [])

    
    const[identi,setIdenti]=useState("");
    const[name,setName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[address,setAddress]=useState("");
    const[gender,setGender]=useState("male");
    const[validation,setValidation]=useState("");

    const navigate = useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const cliendata={identi,name,lastName,email,phone,address,gender};

      //let jwttoken = sessionStorage.getItem("jwttoken");
      fetch("http://localhost:3000/client/"+clienid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(cliendata)
      }).then((res)=>{
        toast.success('Success');
        navigate("/client");
      }).catch((err)=>{
        toast.error(err.message);
      })
    }
    


  return (
    <div>

    <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit}>

                <div className="card" style={{"textAlign":"left"}}>
                    <div className="card-title">
                        <h2>Client Edit</h2>
                    </div>
                    <div className="card-body">

                        <div className="row">

                        <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>ID <span className="errmsg">*</span></label>
                                        <input value={identi} onChange={e => setIdenti(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input required value={name} onMouseDown={e=>setValidation(true)} onChange={e=>setName(e.target.value)} className="form-control"></input>
                                {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input required value={lastName} onMouseDown={e=>setValidation(true)} onChange={e=>setLastName(e.target.value)} className="form-control"></input>
                                {lastName.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input value={phone} onChange={e=>setPhone(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea value={address} onChange={e => setAddress(e.target.value)} className="form-control"></textarea>
                                    </div>
                            </div>

                            <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <br></br>
                                        <input type="radio" checked={gender === 'male'} onChange={e => setGender(e.target.value)} name="gender" value="male" className="app-check"></input>
                                        <label>Male</label>
                                        <input type="radio" checked={gender === 'female'} onChange={e => setGender(e.target.value)} name="gender" value="female" className="app-check"></input>
                                        <label>Female</label>
                                    </div>
                                </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                   <button className="btn btn-success" type="submit">Save</button>
                                   <Link to="/client" className="btn btn-danger">Back</Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </form>

        </div>
    </div>
</div>
  )
}

export default ClientEdit