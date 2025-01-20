// import React from 'react'
import image from "../../assets/unsplash_LA1VawaCjjI.svg"
import "./Hero.css"

const Hero = () => {
  return (
    <div>
        {/* <!-- Hero Section --> */}

<div className="row h-50 contain">
    <div className="col-md" id="img-container">
    <img src={image}  alt="image" className="img-fluid"/>
    </div>
    <div className="col-md m-auto" >
        <div className=" text-center lead m-auto " id="content">
            <h2>Be part of a Decision</h2>
            <h2 className="text-primary">Vote Today</h2>
            {/* <div className=""> */}
            
                <button className="btn btn-primary" id="btn-one">
                li Register</button>
                <button className="btn btn-primary" id="btn-two">Read More</button>
            {/* </div> */}
        </div>
    </div>
</div>
    </div>
  )
}

export default Hero