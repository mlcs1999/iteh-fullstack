import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });


    function handleInput(e) {
        // console.log(e);
        let newUserData = userData;
        newUserData[e.target.name] = e.target.value;
        console.log(newUserData);
        setUserData(newUserData);
    }

    let navigate = useNavigate();

    function handleRegister(e) {
        e.preventDefault();
        axios.post("api/register", userData).then( (response) => {
            console.log(response.data);
            navigate("/login");
        }).catch( (error) => {
            console.log(error);
        }); 
    }

  return (
    <section
    className="vh-100"
    style={{
      paddingTop: 4.5 + "rem",
    }}
  >
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img 
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
          className="img-fluid" 
          alt="Sample image"/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={ handleRegister }>

          <div className="form-outline mb-4">
              <input
                type="name"
                id="form3Example2"
                className="form-control form-control-lg"
                placeholder="Enter a valid username"
                name='username'
                onInput={ (e) => handleInput(e) }
              />
              <label className="form-label" htmlFor="form3Example2">
                Username
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="email"
                id="form3Example3"
                className="form-control form-control-lg"
                placeholder="Enter a valid email address"
                name='email'
                onInput={ (e) => handleInput(e) }
              />
              <label className="form-label" htmlFor="form3Example3">
                Email address
              </label>
            </div>

            <div className="form-outline mb-3">
              <input
                type="password"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Enter password"
                name='password'
                onInput={ handleInput }
              />
              <label className="form-label" htmlFor="form3Example4">
                Password
              </label>
            </div>

            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{
                  paddingLeft: 2.5 + "rem",
                  paddingRight: 2.5 + "rem",
                }}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);
};

export default RegisterPage