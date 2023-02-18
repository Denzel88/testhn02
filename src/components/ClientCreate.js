import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  { toast }  from 'react-toastify';

const ClientCreate = () => {
    

    const [id, setId] = useState("")
    const [identi, setIdenti] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [gender, setGender] = useState("male")
    const [validation, setValidation] = useState("")

    const navigate =  useNavigate
    

    const IsValidate=()=>{
        let isproceed=true;
        let errormessage = 'Please enter the value in ';
        if(identi=== null || identi=== ''){
            isproceed = false;
            errormessage += ' Username';
        }
        if(name=== null || name=== ''){
            isproceed = false;
            errormessage += ' Fullname';
        }
        if(lastName=== null || lastName=== ''){
            isproceed = false;
            errormessage += ' Password';
        }
        if(email=== null || email=== ''){
            isproceed = false;
            errormessage += ' email';
        }
        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

        }else{
            isproceed = false;
            toast.warning('Please enter the valid email')
        }
        return isproceed;

    }
}

    const handlesubmit=(e)=>{
        e.preventDefault();
        const clidata={id,identi,name,lastName,email,phone,address,gender};
        if(IsValidate()){
        fetch("http://localhost:3000/client",{
            method: "POST",
            headers:{"content-type": "application/json"},
            body:JSON.stringify(clidata)
        }).then((res)=>{
            toast.success('Success');
            window.location.reload(true);
            //navigate("/client/*");
            //<Navigate to="/client/edit" replace={true}/>
        }).catch((err)=>{
            toast.error(err.message);
        })
    }
    }


    

  return (
    <div>

    <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit}>

                <div className="card" style={{"textAlign":"left"}}>
                    <div className="card-title">
                        <h2>Client Register</h2>
                    </div>
                    <div className="card-body">

                        <div className="row">

                        <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>ID <span className="errmsg">*</span></label>
                                        <input value={identi} type="number" onChange={e => setIdenti(e.target.value)} className="form-control"></input>
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
                                   {/*<Link to="/client" className="btn btn-danger">Back</Link>*/}
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

export default ClientCreate