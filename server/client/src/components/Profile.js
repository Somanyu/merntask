import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = () => {

  const history = useHistory();
  const [userData, setUserData] = useState();

  const callProfilePage = async () => {
    try {
      const res = await fetch('/profile', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
      history.push('/login');
    }
  }

  useEffect(() => {
    callProfilePage();
  }, []);

  return (
    <div>
      <div className="container" style={{marginTop: "4rem"}}>
        <div className="row">
          <div className="col-md-4 col-lg-3 offset-lg-1" style={{borderRadius: "3px",boxShadow: "2px 2px 5px #efefef",marginTop: "1rem",marginBottom: "1rem",background: "#ffffff"}}>
            {/* <div className="text-center" style={{marginTop: "1.5rem"}}><img className="img-fluid" src="casual-life-3d-avatar-with-man-in-green-shirt-and-orange-hat.png" width="150" height="150" alt='avatar' /></div> */}
            <div>
              <h5 style={{textAlign: "center",fontFamily: "Roboto, sans-serif",marginTop: "1rem"}}>Somanyu Samal</h5>
            </div>
            <div className="d-flex d-lg-flex align-items-center align-items-lg-center" style={{marginTop: "1.5rem",fontFamily: "Lato, sans-serif"}}><i className="icon-envelope" style={{fontSize: "17px"}}></i>
              <p style={{fontSize: "15px",marginBottom: "0px"}}>  somanyu@mail.com</p>
            </div>
            <div className="d-flex d-lg-flex align-items-center align-items-lg-center" style={{marginTop: ".2rem",fontFamily: "Lato, sans-serif"}}><i className="icon-phone" style={{fontSize: "17px"}}></i>
              <p style={{fontSize: "15px",marginBottom: "0px"}}> 985632145</p>
            </div>
            <div className="d-flex d-lg-flex align-items-center align-items-lg-center" style={{marginTop: ".2rem",fontFamily: "Lato, sans-serif",marginBottom: "1.7rem"}}><i className="icon-location-pin" style={{fontSize: "17px"}}></i>
              <p style={{fontSize: "15px",marginBottom: "0px"}}> Bangalore</p>
            </div>
            <div className="d-flex d-lg-flex justify-content-around align-items-center align-items-lg-center" style={{marginBottom: "1.7rem",paddingRight: "53px",paddingLeft: "26px"}}><i className="icon-social-skype" style={{fontSize: "18px",color: "#00aff0"}}></i><i className="icon-social-instagram" style={{fontSize: "18px",color: "#e5053a",fontWeight: "bold"}}></i><i className="icon-social-reddit" style={{fontSize: "18px",color: "#f96302"}}></i><i className="icon-social-twitter" style={{fontSize: "18px",color: "#28c4d8"}}></i></div>
          </div>
          <div className="col-md-8 col-lg-6 offset-lg-1" style={{marginTop: "1rem",marginBottom: "1rem",background: "#ffffff",boxShadow: "2px 1px #efefef",borderRadius: "2px"}}>
            <div style={{marginTop: "1rem",marginLeft: "1rem"}}>
              <h2 style={{fontFamily: "Poppins, sans-serif"}}>Somanyu&#39;s Profile</h2>
            </div>
            <form method='GET' style={{marginTop: "1.5rem"}}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group mb-3"><label className="form-label" style={{marginBottom: "2px",fontFamily: "Roboto, sans-serif"}}>First Name</label><input className="form-control form-control-sm" type="text" name="firstName"  style={{fontFamily: "Lato, sans-serif",fontSize: "16px"}} />{ userData.firstName }</div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group mb-3"><label className="form-label" style={{marginBottom: "2px",fontFamily: "Roboto, sans-serif"}}>Last Name</label><input className="form-control form-control-sm" type="text" name="lastName" value="Samal" style={{fontFamily: "Lato, sans-serif",fontSize: "16px"}} /></div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group mb-3"><label className="form-label" style={{marginBottom: "2px",fontFamily: "Roboto, sans-serif"}}>Your e-mail </label><input className="form-control form-control-sm" type="email" name="email" value="somanyu@mail.com" style={{fontFamily: "Lato, sans-serif",fontSize: "16px"}} /></div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group mb-3"><label className="form-label" style={{marginBottom: "2px",fontFamily: "Roboto, sans-serif"}}>Profession</label><input className="form-control form-control-sm" type="text" name="profession" value="Somanyu" style={{fontFamily: "Lato, sans-serif",fontSize: "16px"}} /></div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group mb-3"><label className="form-label" style={{marginBottom: "2px",fontFamily: "Roboto, sans-serif"}}>Phone Number</label><input className="form-control" type="number" name="phone" value="789465123" style={{fontFamily: "Lato, sans-serif",fontSize: "16px"}} /></div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group mb-3"><label className="form-label" style={{marginBottom: "2px",fontFamily: "Roboto, sans-serif"}}>About Yourself</label><textarea className="form-control" name="about"></textarea></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile