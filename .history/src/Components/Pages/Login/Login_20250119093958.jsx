import React from 'react'

const Login = () => {
  return (
    <div>
        <div class="row hero h-100">
    <div class="col-md  container-fluid">
        <img src="./unsplash_LA1VawaCjjI.svg" alt="login image" class=" img-fluid" width="100%">
    </div>
    <div class="col-md text-white align-items-center">
        <form action="" class="w-75  p-5 m-auto ">
            <h1>Login</h1>
            <label for="email" class="form-label">Email  <br>              <input class="form-control form-text w-100" type="text">
            </label> <br>
            <label class="form-label"" for="password">password  <br>
                <input class="form-control w-100" type="password" class="form-text">
            </label> <br>
            <p class="text-primary">Forgot Password ?</p> 
            <span>Not a User ?</span>
            <span class="text-primary"><a class="text-decoration-none" href="./Register.html">Register Now!</a></span> <br>
            <button class="btn btn-primary">LOGIN</button>
        </form>
    </div>
</div>

    </div>
  )
}

export default Login