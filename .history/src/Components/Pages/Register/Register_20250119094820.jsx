import React from 'react'

const Register = () => {
  return (
    <>
        <div className="row hero ">
    <div className="col-md  container-">
        <img src="./unsplash_LA1VawaCjjI.svg" alt="login image" className=" img-fluid" width="100%" />
    </div>
    <div className="col-md  align-items-center h-100">
        <form action="#" className="w-100  p-5 m-auto col-lg-8">
            <h1>Register</h1>
            <label for="name" className="form-label">Name  
                <input className="form-control form-text w-100" type="text" />
            </label> 
            <label className="form-label" for="dob">Date Of Birth  
                <input className="form-control w-100" type="text" className="form-text" />
            </label> 
             
             <label className="form-label" for="parents-name">Father's/Mother's Name 
                <input className="form-control w-100" type="text" className="form-text" />
            </label>
            
            <label className="form-label" for="email">Email  <br>
                <input className="form-control w-100" type="text" className="form-text">
            </label>
            
            <label className="form-label" for="mobile-no">Mobile No  <br>
                <input className="form-control w-100" type="text" className="form-text" />
            </label>
            
            <label className="form-label" for="mobile-no">Another Mobile No  <br>
                <input className="form-control w-100" type="text" className="form-text" />
            </label>
            
            


            <label className="form-label" for="password">Password 
                <input className="form-control w-100" type="text" className="form-text" />
            </label>
             <br/>
            
            <label className="form-label" for="confirm-password">Confirm Password  
            <br/>
                <input className="form-control w-100" type="text" className="form-text" />
            </label>
            <br/>
            <button className="btn btn-primary ">LOGIN</button>
        </form>
    </div>
</div>
for

    <
  )
}

export default Register