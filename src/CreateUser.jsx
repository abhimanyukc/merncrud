import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [name, setName] = React.useState()
    const [email, setEmail] = React.useState()
    const [age, setAge] = React.useState()
    const navigate =  useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/createUser", {name, email, age})
        .then(result =>  {
            console.log(result)
            navigate('/')
     })
        .catch(err => console.log(err))
    }
    return (
          <div className=' d-flex vh-100 bg-primary  justify-content-center align-items-center'>
              <div className='w-50 bg-white rounded p-3    '>
                <form onSubmit={Submit} className=''>
                    <h2 className='  d-flex  align-items-start'>Add User</h2>
                    <div className='mb-2 text-start' >
                       <label htmlFor='' className='d-flex  align-items-start' >Name</label>
                       <input type="text" placeholder='Enter Name' className='form-control'
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='mb-2 text-start'>
                       <label htmlFor='' className='d-flex  align-items-start' >Email</label>
                       <input type="email" placeholder='Enter Email' className='form-control'
                       onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-2 text-start'>
                        <label htmlFor='' className=' d-flex  align-items-start'>Age</label>
                        <input type="text" placeholder='Enter Age' className='form-control'
                        onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <button className='btn btn-success d-flex  align-items-start '>Submit</button>
                </form>
                </div>  
          </div>
    )
}

export default CreateUser;

