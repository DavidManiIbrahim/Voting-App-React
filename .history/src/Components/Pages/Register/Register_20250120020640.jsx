// import React from 'react'
import "./Register.css";
import img from "../../"

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
            className="w-100 p-5 m-auto col-md "
          >
            <h1>Register</h1>
            <label className="col-sm m-2">
              Name 
            </label>
            <input className="form-control  w-100" type="text" />
                {/* <br/> */}

            <label className="m-2">
              Date Of Birth 
            </label>
            <input className="form-control w-100" type="text" />
            {/* <br /> */}
            {/* <label className="form-label col-sm ">
              Father &apos;s/Mother&apos;s Name <br />
            </label>
            <input className="form-control w-100" type="text" /> */}

            <label className="m-2 col-sm ">
              Email 
            </label>
            <input className="form-control w-100" type="email" />
            {/* <br /> */}
            <label className=" m-2 ">
              Mobile No 
            </label>
            <input className="form-control w-100" type="text" />
            {/* <br /> */}
            
            <label className="m-2">
              Password 
            </label>
            <input className="form-control w-100" type="text" />
            
            <label className="m-2">
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
