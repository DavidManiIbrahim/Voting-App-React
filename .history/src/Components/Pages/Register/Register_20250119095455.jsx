import React from 'react'

const Register = () => {
  return (
    <>

<div className="row hero h">
    <div className="col-md  container-">
        <img src="./unsplash_LA1VawaCjjI.svg" alt="login image" className=" img-fluid" width="100%" />
    </div>
    <div className="col-md  align-items-center h-100">
        <htmlForm action="#" className="w-100  p-5 m-auto col-lg-8">
            <h1>Register</h1>
            <label htmlFor="name" className="htmlForm-label">Name  
                <input className="htmlForm-control htmlForm-text w-100" type="text" />
            </label> 
            <label className="htmlForm-label" htmlFor="dob">Date Of Birth  
                <input className="htmlForm-control w-100" type="text" className="Form-text" />
            </label> 
             
             <label className="htmlForm-label" htmlFor="parents-name">Father's/Mother's Name 
                <input className="htmlForm-control w-100" type="text" className="htmlForm-text" />
            </label>
            
            <label className="htmlForm-label" htmlFor="email">Email  <br/>
                <input className="htmlForm-control w-100" type="text" className="htmlForm-text" />
            </label>
            
            <label className="htmlForm-label" htmlFor="mobile-no">Mobile No  <br/>
                <input className="htmlForm-control w-100" type="text" className="htmlForm-text" />
            </label>
            
            <label className="htmlForm-label" htmlFor="mobile-no">Another Mobile No  <br/>
                <input className="htmlForm-control w-100" type="text" className="htmlForm-text" />
            </label>
            
           
            <label className="htmlForm-label" htmlFor="password">Password  <br/>
                <input className="htmlForm-control w-100" type="text" className="htmlForm-text" />
            </label>
            
            <label className="htmlForm-label" htmlFor="confirm-password">Confirm Password  <br/>
                <input className="htmlForm-control w-100" type="text" className="htmlForm-text" />
            </label>
            <br/>
            <button className="btn btn-primary ">LOGIN</button>
        </htmlForm>
    </div>
</div>



    </>
  )
}

export default Register