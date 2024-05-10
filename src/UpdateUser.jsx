import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function UpdateUser() {
    const {id} = useParams()
    const [name, setName] = React.useState()
    const [email, setEmail] = React.useState()
    const [age, setAge] = React.useState()
    const navigate =  useNavigate()

    useEffect(() => {
   axios.get('http://localhost:3000/getUser/'+id)
   .then(result => {console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
   })
   .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3000/updateUser/"+id, {name, email, age})
        .then(result =>  {
            console.log(result)
            navigate('/')
     })
        .catch(err => console.log(err))
    }
    return (
        <div className=' d-flex vh-100 bg-primary  justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3    '>
          <form  onSubmit={Update} className=''>
              <h2 className='  d-flex  align-items-start'>Update User</h2>
              <div className='mb-2 text-start' >
                 <label htmlFor='' className='d-flex  align-items-start' >Name</label>
                 <input type="text" placeholder='Enter Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className='mb-2 text-start'>
                 <label htmlFor='' className='d-flex  align-items-start' >Email</label>
                 <input type="email" placeholder='Enter Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className='mb-2 text-start'>
                  <label htmlFor='' className=' d-flex  align-items-start'>Age</label>
                  <input type="text" placeholder='Enter Age' className='form-control' value={age} onChange={(e) => setAge(e.target.value)}/>
              </div>
              <button className='btn btn-success d-flex  align-items-start '>Update</button>
          </form>
          </div>  
    </div>
    )
}

export default UpdateUser;

