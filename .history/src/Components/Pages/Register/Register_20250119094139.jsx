import React from 'react'

const Register = () => {
  return (
    <div>
        <div classNameNam="row hero h">
    <div classNameNam="col-md  container-">
        <img src="./unsplash_LA1VawaCjjI.svg" alt="login image" classNameNam=" img-fluid" width="100%">
    </div>
    <div classNameNam="col-md  align-items-center h-100">
        <form action="" classNameNam="w-100  p-5 m-auto col-lg-8">
            <h1>Register</h1>
            <label for="name" classNameNam="form-label">Name  
                <input classNameNam="form-control form-text w-100" type="text">
            </label> 
            <label classNameNam="form-label"" for="dob">Date Of Birth  
                <input classNameNam="form-control w-100" type="text" classNameNam="form-text">
            </label> 
             
             <label classNameNam="form-label"" for="parents-name">Father's/Mother's Name 
                <input classNameNam="form-control w-100" type="text" classNameNam="form-text">
            </label>
            
            <label classNameNam="form-label"" for="email">Email  <br>
                <input classNameNam="form-control w-100" type="text" classNameNam="form-text">
            </label>
            
            <label classNameNam="form-label"" for="mobile-no">Mobile No  <br>
                <input classNameNam="form-control w-100" type="text" classNameNam="form-text">
            </label>
            
            <label classNameNam="form-label"" for="mobile-no">Another Mobile No  <br>
                <input classNameNam="form-control w-100" type="text" classNameNam="form-text">
            </label>
            
            


            <label classNameNam="form-label"" for="password">Password  <br>
                <input classNameNam="form-control w-100" type="text" classNameNam="form-text">
            </label>
            
            <label classNameNam="form-label"" for="confirm-password">Confirm Password  <br>
                <input classNameNam="form-control w-100" type="text" classNameNam="form-text">
            </label>
            <br>
            <button classNameNam="btn btn-primary ">LOGIN</button>
        </form>
    </div>
</div>


    </div>
  )
}

export default Register