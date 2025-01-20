// import React from 'react'
import { Link } from "react-router-dom"


const Login = () => {
  return (
    
<div className="row hero h-100 bg-black">
    <div className="col-md  container-fluid">
        <img src="./unsplash_LA1VawaCjjI.svg" alt="login image" className=" img-fluid" width="100%" />
    </div>
    <div className="col-md text-white align-items-center">
        <form action="" className="w-75  p-5 m-auto ">
            <h1>Login</h1>
            <label htmlFor="email" className="m-2">Email  <br/>             
            <input className="form-control " type="text" />
            </label> <br/>
            <label className="form-label" htmlFor="password">password  <br/>
                <input className="form-control w-100" type="password"  />
            </label> <br/>
            <p className="text-primary">Forgot Password ?</p> 
            <span>Not a User ?</span>
            <span className="text-primary"><Link to="/Register" className="text-decoration-none">Register Now!</Link></span> <br/>
            <button className="btn btn-primary">LOGIN</button>
        </form>
    </div>
</div>












  )
}

export default Login