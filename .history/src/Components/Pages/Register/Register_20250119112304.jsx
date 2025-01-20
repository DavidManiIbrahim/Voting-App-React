// import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <>

<div className="row hero ">
    <div className="col-md  container-">
        <img src="./unsplash_LA1VawaCjjI.svg" alt="login image" className=" img-fluid" width="100%" />
    </div>
    <div className="col-md  align-items-center h-100 bg-black text-light">
        <form action="#" className="w-100 bg-secondary p-5 m-auto col-lg-8 gap-5">
            <h1>Register</h1>
            <label  className="col form-label">Name  <br/>
                <input className="form-control form-text w-100" type="text" />
            </label>
            <br/> 
            <label className="form-label" >Date Of Birth  <br/>
                <input className="form-control w-100" type="text"  />
            </label> 
            <br/>
             <label className="form-label" >Father &apos;s/Mother&apos;s Name <br/>
                <input className="form-control w-100" type="text"  />
            </label>
            <br/>
            <label className="form-label" >Email  <br/>
            <input className="form-control w-100" type="email"  />
            </label>
            <br/>
            <label className="form-label" >Mobile No  <br/>
                <input className="form-control w-100" type="text"  />
            </label>
            <br/>
            <label className="form-label" >Another Mobile No  <br/>
                <input className="form-control w-100" type="text"  />
            </label>
            <br/>
           
            <label className="form-label" >Password  <br/>
                <input className="form-control w-100" type="text"  />
            </label>
            <br/>
            <label className="form-label" >Confirm Password  <br/>
                <input className="form-control w-100" type="text" />
            </label>
            <br/>
            <button className="btn btn-primary ">LOGIN</button>
        </form>
    </div>
</div>



    </>
  )
}

export default Register