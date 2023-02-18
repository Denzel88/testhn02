import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import queryString from 'query-string';
import ClientCreate from './ClientCreate';
import Navbar from './Navbar';



const ClientListing = () => {
    const location = useLocation();
    const[cliendata, setCliendata]=useState([]);
    const navigate=useNavigate();
    const {q = ""} = queryString.parse(location.search);
    const [inputValue, setInputValue]=useState(q);
  

    const loadDetail=(id)=>{
        navigate("/client/detail/"+id);
         }

    const loadEdit=(id)=>{
        //console.log(id);
        navigate("/client/edit/"+id);
    }
    const removeFunction=(id)=>{
        if(window.confirm('Do you want to remove')){
           let jwttoken = sessionStorage.getItem("jwttoken");
            fetch("http://localhost:3000/client/"+id,{
                headers: {
                    'Authorization': 'bearer ' + jwttoken
                },
                method:"DELETE",
            }).then((res)=>{
                toast.success('Remove Successfully!')
                window.location.reload(true);
            }).catch((err)=>{
                toast.error(err.message);
            })
        }
    }

    
    useEffect(() => {
        fetch("http://localhost:3000/client/").then((res)=>{
            return res.json();
        }).then((resp)=>{
            console.log('fetch');
            setCliendata(resp);
        }).catch((err)=>{
            toast.error(err.message);
        })
    }, [])


    const handleChange=(e)=>{
        const value = e.target.value
        setInputValue(value)
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`?q=${inputValue}`);
    };
    

    const getSearch=()=>{
        if(inputValue.trim() && cliendata.length !==""){
            console.log("aca estoy");
            const value = inputValue.toLocaleLowerCase()
            const newValue = cliendata.filter
            ((datos)=> cliendata.name.toLocaleLowerCase().includes(value));
            setDatos(newValue)
        } else{
            console.log("aca estoy tambien");
            fetch("http://localhost:3000/client/").then((res)=>{
                return res.json();
            }).then((resp)=>{
                setCliendata(resp);
            }).catch((err)=>{
                toast.error(err.message);
            })

        }
    }

    useEffect(() => {
      getSearch()
    }, [q])

   
    
    const [formView, setformView] = useState(false)

  return (
    <>
    <Navbar />
    <div className="container">
    <div className="card">
        <div className="card-title">
            <h2>Client Listing</h2>
        </div>
        <div className="card-body">
            <button 
            onClick={() => setformView(!formView)} 
            className="btn btn-success">
            {!formView ? "+ Nuevo Contacto" : "- Ocultar"}
                {/*<Link to="create" className="btn btn-success">Add New (+)</Link>*/}
            </button>
            {formView && <ClientCreate/>}
            <hr/>
            <form onSubmit={handleSubmit}>
            <label className='form-label w-10'>
                <input placeholder='search' type="text" 
                className='form-control' autoComplete='off' value={inputValue}
                onChange={handleChange} />
            </label>
            <button type='submit' className='btn btn-info w-10'>Search</button>
        </form>
            <table className="table table-bordered">
                <thead className="bg-dark text-white">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>

                    {cliendata &&
                        cliendata.map(item => (
                            <tr key={item.id}>
                                <td>{item.identi}</td>
                                <td>{item.name}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                <a onClick={() => { loadEdit(item.id) }} className="btn btn-success">Edit</a>
                                    <a onClick={() => { removeFunction(item.id) }} className="btn btn-danger">Remove</a>
                                    <a onClick={() => { loadDetail(item.id) }} className="btn btn-primary">Details</a>
                                    </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>
    </div>
</div>
</>
  )
}

export default ClientListing