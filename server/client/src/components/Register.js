import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {

  const history = useHistory();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    profession: "",
    about: ""
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, password, confirmPassword, profession, about } = user;

    const res = await fetch("/users/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName, lastName, email, phone, password, confirmPassword, profession, about
      })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registeration");
      console.log("Invalid Registeration");
    } else {
      window.alert("Valid Registeration");
      console.log("Valid Registeration");

      // history.pushState("/auth/login");
      history.push("/login")
    }
  }

  return (
    <div>
      <section className="position-relative py-4 py-xl-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2>Register</h2>
              <p className="w-lg-50">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4">
              <div className="card mb-5">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4"><i className="icon-user"></i></div>
                  <form method='post' style={{ fontFamily: "Lato, sans-serif", fontSize: "16px", padding: "13px" }}>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group mb-3"><label className="form-label">First name</label><input className="form-control" value={user.firstName} onChange={handleInputs} type="text" name="firstName" /></div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-3"><label className="form-label">Last name</label><input className="form-control" value={user.lastName} onChange={handleInputs} type="text" name="lastName" /></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group mb-3"><label className="form-label">Profession</label><input className="form-control" value={user.profession} onChange={handleInputs} type="text" name="profession" /></div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-3"><label className="form-label">Phone Number</label><input className="form-control" value={user.phone} onChange={handleInputs} type="text" name="phone" /></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group mb-3"><label className="form-label">Set Email</label><input className="form-control" value={user.email} onChange={handleInputs} type="email" name="email" /></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group mb-3"><label className="form-label">Enter password</label><input className="form-control" value={user.password} onChange={handleInputs} type="password" name="password" /></div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-3"><label className="form-label">Confirm password</label><input className="form-control" value={user.confirmPassword} onChange={handleInputs} type="password" name="confirmPassword" /></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group mb-3"><label className="form-label">About Yourself</label><textarea className="form-control" value={user.about} onChange={handleInputs} name='about'></textarea></div>
                      </div>
                    </div>
                    <p style={{ color: "#d30547", fontFamily: "Lato, sans-serif", fontSize: "16px" }}><i className="icon-close" style={{ fontWeight: "bold", fontSize: "17px" }}></i>  Paragraph</p>
                    <div className="d-grid" style={{ marginBottom: "2rem" }}><button onClick={PostData} className="btn btn-primary" type="submit" style={{ fontFamily: "Roboto, sans-serif", background: "#0051ba", fontSize: "18px", letterSpacing: ".4px", marginTop: "10px" }}>Get Started</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></div>
  )
}

export default Register