import React from 'react'

const Register = () => {
  return (
    <>

<div className="row hero h">
    <div className="col-md  container-">
        <img src="./unsplash_LA1VawaCjjI.svg" alt="login image" className=" img-fluid" width="100%" />
    </div>
    <div className="col-md  align-items-center h-100">
        <htmlform action="#" className="w-100  p-5 m-auto col-lg-8">
            <h1>Register</h1>
            <label htmlfor="name" className="htmlform-label">Name  
                <input className="htmlform-control htmlform-text w-100" type="text" />
            </label> 
            <label className="htmlform-label" htmlfor="dob">Date Of Birth  
                <input className="htmlform-control w-100" type="text" className="htmlform-text" />
            </label> 
             
             <label className="htmlform-label" htmlfor="parents-name">Father's/Mother's Name 
                <input className="htmlform-control w-100" type="text" className="htmlform-text" />
            </label>
            
            <label className="htmlform-label" htmlfor="email">Email  <br/>
                <input className="htmlform-control w-100" type="text" className="htmlform-text" />
            </label>
            
            <label className="htmlform-label" htmlfor="mobile-no">Mobile No  <br/>
                <input className="htmlform-control w-100" type="text" className="htmlform-text" />
            </label>
            
            <label className="htmlform-label" htmlfor="mobile-no">Another Mobile No  <br/>
                <input className="htmlform-control w-100" type="text" className="htmlform-text" />
            </label>
            
           
            <label className="htmlform-label" htmlfor="password">Password  <br/>
                <input className="htmlform-control w-100" type="text" className="htmlform-text" />
            </label>
            
            <label className="htmlform-label" htmlfor="confirm-password">Confirm Password  <br/>
                <input className="htmlform-control w-100" type="text" className="htmlform-text" />
            </label>
            <br/>
            <button className="btn btn-primary ">LOGIN</button>
        </htmlform>
    </div>
</div>



    </>
  )
}

export default Register