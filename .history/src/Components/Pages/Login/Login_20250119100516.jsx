import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="row hero h-100">
    <div className="col-md  container-fluid">
        <img src="./unsplash_LA1VawaCjjI.svg" alt="login image" className=" img-fluid" width="100%" />
    </div>
    <div className="col-md text-white align-items-center">
        <form action="" className="w-75  p-5 m-auto ">
            <h1>Login</h1>
            <label for="email" className="form-label">Email  <br>              <input className="form-control form-text w-100" type="text">
            </label> <br>
            <label className="form-label"" for="password">password  <br/>
                <input className="form-control w-100" type="password" />
            </label> <br>
            <p className="text-primary">Forgot Password ?</p> 
            <span>Not a User ?</span>
            <span className="text-primary"><a className="text-decoration-none" href="./Register.html">Register Now!</a></span> <br>
            <button className="btn btn-primary">LOGIN</button>
        </form>
    </div>
</div>

    </div>
  )
}

export default Login