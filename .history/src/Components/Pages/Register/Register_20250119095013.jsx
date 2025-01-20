import React from 'react'

const Register = () => {
  return (
    <>

<div class="row hero h">
    <div class="col-md  container-">
        <img src="./unsplash_LA1VawaCjjI.svg" alt="login image" class=" img-fluid" width="100%">
    </div>
    <div class="col-md  align-items-center h-100">
        <form action="" class="w-100  p-5 m-auto col-lg-8">
            <h1>Register</h1>
            <label for="name" class="form-label">Name  
                <input class="form-control form-text w-100" type="text">
            </label> 
            <label class="form-label"" for="dob">Date Of Birth  
                <input class="form-control w-100" type="text" class="form-text">
            </label> 
             
             <label class="form-label"" for="parents-name">Father's/Mother's Name 
                <input class="form-control w-100" type="text" class="form-text">
            </label>
            
            <label class="form-label"" for="email">Email  <br>
                <input class="form-control w-100" type="text" class="form-text">
            </label>
            
            <label class="form-label"" for="mobile-no">Mobile No  <br>
                <input class="form-control w-100" type="text" class="form-text">
            </label>
            
            <label class="form-label"" for="mobile-no">Another Mobile No  <br>
                <input class="form-control w-100" type="text" class="form-text">
            </label>
            
           
            <label class="form-label"" for="password">Password  <br>
                <input class="form-control w-100" type="text" class="form-text">
            </label>
            
            <label class="form-label"" for="confirm-password">Confirm Password  <br>
                <input class="form-control w-100" type="text" class="form-text">
            </label>
            <br>
            <button class="btn btn-primary ">LOGIN</button>
        </form>
    </div>
</div>



    </>
  )
}

export default Register