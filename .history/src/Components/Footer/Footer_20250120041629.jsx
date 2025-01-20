// import React from 'react'

const Footer = () => {
  return (
    <div>

 <!-- footer -->

    <footer class="row text-light  p-5" >
      <div class="contact col-md">
        <ul class="list-unstyled">
          <li>
            <span class="text-primary">contacts:</span>
          </li>
          <li>1800 9090 32</li>
          <li>1800 9000 64</li>
          <br />
          <li>
            <span class="text-primary">helpline number:</span>
          </li>
          <li>9090 1234 46</li>
          <li>9090 1234 47</li>
          <br />
          <li>
            <span class="text-primary">email:</span>
          </li>
          <li>complaint@electionindia.gov.in</li>
          <li>info@electionindia.gov.in</li>
        </ul>
      </div>
      <div class="join col-md">
        <ul class="list-unstyled row">
            <div class="col-sm">

                <li>
                    <span class="text-primary"> Getin</span>
                </li>
                <li>register</li>
                <li>login</li>
            </div>
          <div class="col-sm">

              <li>
                  <span class="text-primary">know more </span>
                </li>
                
                <li>features</li>
                <li>about</li>
                <li>steps</li>
            </div>
          <br />
          <li>
            <span class="text-primary"></span>
          </li>
        </ul>
      </div>
      <div class="newsletter col-md">
        <h2>Quick Feedback</h2>
        <form action="" class="">

            <label for="feedback">Name <br>
                <input type="text" class="form-control">
            </label> 
            <br>
            <label for="textarea">Feedback <br>
                <textarea name="newsletter" id="" class="form-control w-100" width="500px"></textarea>
            </label>  <br>
            <button type="button" class="btn btn-primary float-start">Send</button>
            </form>
      </div>
    </footer>



    </div>
  )
}

export default Footer