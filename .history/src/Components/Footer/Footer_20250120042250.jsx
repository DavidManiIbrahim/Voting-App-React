// import React from 'react'

const Footer = () => {
  return (
    <>

{/* <!-- footer --> */}

<footer className="row text-light bg-dark p-5" >
  <div className="contact col-md">
    <ul className="list-unstyled">
      <li>
        <span className="text-primary">contacts:</span>
      </li>
      <li>1800 9090 32</li>
      <li>1800 9000 64</li>
      <br />
      <li>
        <span className="text-primary">helpline number:</span>
      </li>
      <li>9090 1234 46</li>
      <li>9090 1234 47</li>
      <br />
      <li>
        <span className="text-primary">email:</span>
      </li>
      <li>complaint@electionindia.gov.in</li>
      <li>info@electionindia.gov.in</li>
    </ul>
  </div>
  <div className="join col-md">
    <ul className="list-unstyled row">
        <div className="col-sm">

            <li>
                <span className="text-primary"> Getin</span>
            </li>
            <li>register</li>
            <li>login</li>
        </div>
      <div className="col-sm">

          <li>
              <span className="text-primary">now more </span>
            </li>
            
            <li>features</li>
            <li>about</li>
            <li>steps</li>
        </div>
      <br />
      <li>
        <span className="text-primary"></span>
      </li>
    </ul>
  </div>
  <div className="newsletter col-md">
    <h2>Quick Feedback</h2>
    <htmlForm action="" className="">

        <label htmlFor="feedback" className="form-label">Name <br/>
            <input type="text" className="form-control"/>
        </label> 
        <br/>
        <label htmlFor="textarea" className="form-label">Feedback <br/>
            <textarea name="newsletter" id="" className="form-control w-100" width="500px"></textarea>
        </label>  <br/>
        <button type="button" className="btn btn-primary float-start">Send</button>
        </htmlForm>
  </div>
</footer>


        
    </>
  )
}

export default Footer