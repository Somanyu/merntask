import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-light navbar-expand-md' style={{ fontFamily: 'Poppins, sans-serif', }}>
        <div className="container-fluid"><a className="navbar-brand" href='/'>Brand</a><button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="/navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
          <div id="navcol-1" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href='/profile'>Profile</a></li>
              <li className="nav-item"><a className="nav-link active" href='/login'>Login</a></li>
              <li className="nav-item"><a className="nav-link active" href='/register'>Register</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar