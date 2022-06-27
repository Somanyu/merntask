import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Login = () => {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/users/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials.")
    } else {
      window.alert("Valid Credentials");
      history.push("/profile")
    }
  }

  return (
    <div>
      <section className="position-relative py-4 py-xl-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2>Log in</h2>
              <p className="w-lg-50">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4">
              <div className="card mb-5">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4"><i className="icon-user"></i></div>
                  <form className="text-center" method="post">
                    <div className="mb-3"><input className="form-control" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /></div>
                    <div className="mb-3"><input className="form-control" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /></div>
                    <div className="mb-3"><button className="btn btn-primary d-block w-100" onClick={loginUser} type="submit">Login</button></div>
                    <p className="text-muted">Forgot your password?</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login