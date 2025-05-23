// import React from 'react'
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="row hero ">
        <div className="col-md  container-">
          <img
            src="./unsplash_LA1VawaCjjI.svg"
            alt="login image"
            className=" img-fluid"
            width="100%"
          />
        </div>
        <div className="col-md  align-items-center h-100 bg-black text-light">
          <form
            action="#"
            className="w-100 bg-secondary p-5 m-auto col-md "
          >
            <h1>Register</h1>
            <label className="col-sm p-">
              Name 
            </label>
            <input className="form-control  w-100" type="text" />
                <br/>

            <label className="">
              Date Of Birth 
            </label>
            <input className="form-control w-100" type="text" />
            <br />
            {/* <label className="form-label col-sm ">
              Father &apos;s/Mother&apos;s Name <br />
            </label>
            <input className="form-control w-100" type="text" /> */}

            <label className=" form-label col-sm ">
              Email 
            </label>
            <input className="form-control w-100" type="email" />
            <br />
            <label className="form-label">
              Mobile No 
            </label>
            <input className="form-control w-100" type="text" />
            <br />
            
            <label className="form-label">
              Password 
            </label>
            <input className="form-control w-100" type="text" />
            
            <label className="form-label">
              Confirm Password <br />
            </label>
            <input className="form-control w-100" type="text" />
            <br />
            <button className="btn btn-primary ">LOGIN</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
