// import React from 'react'


const App = () => {
  return (
    <div>
      <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#text">click me</button>
      <ul className="bg-dark collapse text-white" id="text">
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
      </ul>
      <button className="btn btn-secondary">click me</button>
      App</div>
  )
}

export default App