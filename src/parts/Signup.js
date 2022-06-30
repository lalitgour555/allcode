import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
// import Form from "../Form";
const Signup = () => {
  const [error, seterror] = useState({
    fname: "",
    lname: "",
    mname: "",
    faname: "",
    password: "",
    dob: "",
    add: "",
    pin: "",
    mail: "",
    state: "",
    gender: "",
    city: "",
    checkbox: false,
  });
  const [input, setinput] = useState({
    fname: "",
    lname: "",
    mname: "",
    faname: "",
    state: "",
    password: "",
    dob: "",
    add: "",
    pin: "",
    mail: "",
    gender: "",
    city: "",
    checkbox: false,
  });
  const [output, setoutput] = useState([]);

  const submitform = () => {
    Object.keys(input).map((a) => {
      if (!input[a]) {
        
        // seterror(({ ...error, [a]:`please fill + ${a}`}));
        seterror((prerror) => ({ ...prerror, [a]: `please fill ${a}` }));

      } else {
        setoutput({ ...input, input });
        seterror((prerror) => ({ ...prerror, [a]: "" }));
      }

    });
   
    
    let reset = Object.keys(error).filter((item)=>{
return error[item]
    })
    if(reset.length==0){
      setinput({ fname: "",
      lname: "",
      mname: "",
      faname: "",
      state: "",
      password: "",
      dob: "",
      add: "",
      pin: "",
      mail: "",
      gender: "",
      city: "",
      checkbox: false,})
    }
    console.log(reset)
  };


  const resetall = () => {
    Object.keys(input).map((a) => {
      setinput((input) => ({ ...input, [a]: "" }));
    });
  };

  const onchangehandler = (e) => {
    if (e.target.name === "checkbox") {
      setinput({
        ...input,
        [e.target.name]: !input.checkbox,
      });
    } else {
      setinput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
      <Header />{" "}
      <div>
        <form name="myForm">
          <section className="h-100 bg-dark">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                  <div className="card card-registration my-4">
                    <div className="row g-0">
                      <div className="col-xl-6 d-none d-xl-block">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                          alt="Sample photo"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-xl-6">
                        <div className="card-body p-md-5 text-black">
                          <h3 className="mb-5 text-uppercase">
                            Account registration form
                          </h3>

                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label className="form-label">First name</label>
                                <input
                                  type="text"
                                  id="form3Example1m"
                                  name="fname"
                                  className="form-control form-control-lg"
                                  value={input.fname}
                                  minlength="3"
                                  required
                                  onChange={(e) => onchangehandler(e)}
                                />
                                <p style={{ color: "red" }}>{error.fname}</p>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  for="form3Example1n"
                                >
                                  Last name
                                </label>
                                <input
                                  type="text"
                                  id="form3Example1n"
                                  name="lname"
                                  minLength="3"
                                  value={input.lname}
                                  className="form-control form-control-lg"
                                  onChange={(e) => onchangehandler(e)}
                                />
                                <p style={{ color: "red" }}>{error.lname}</p>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  for="form3Example1m1"
                                >
                                  Mother's name
                                </label>
                                <input
                                  type="text"
                                  id="form3Example1m1"
                                  name="mname"
                                  minLength="3"
                                  className="form-control form-control-lg"
                                  onChange={(e) => onchangehandler(e)}
                                />
                                <p style={{ color: "red" }}>{error.mname}</p>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  for="form3Example1n1"
                                >
                                  Father's name
                                </label>
                                <input
                                  type="text"
                                  id="form3Example1n1"
                                  name="faname"
                                  minLength="3"
                                  required
                                  className="form-control form-control-lg"
                                  onChange={(e) => onchangehandler(e)}
                                />
                                <p style={{ color: "red" }}>{error.faname}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6 mb-2">
                                <select
                                  className="select"
                                  name="state"
                                  onChange={(e) => onchangehandler(e)}
                                >
                                  <option value="">please select State</option>
                                  <option value="Madhya Pradesh">
                                    Madhya Pradesh
                                  </option>
                                  <option value="Uttar Pradesh">
                                    Uttar Pradesh
                                  </option>
                                  <option value="Utrakhand">Utrakhand</option>
                                </select>
                                <p style={{ color: "red" }}>{error.state}</p>
                              </div>
                              <div className="col-md-6 mb-2">
                                <select
                                  className="select"
                                  name="city"
                                  onChange={(e) => onchangehandler(e)}
                                >
                                  <option value="">please select City</option>
                                  <option value="Gwalior">Gwalior</option>
                                  <option value="Morena">Morena</option>
                                  <option value="Bhind">Bhind</option>
                                  <option value="Bhopal">Bhopal</option>
                                  <option value="Indore">Indore</option>
                                </select>
                                <p style={{ color: "red" }}>{error.city}</p>
                              </div>
                            </div>
                          </div>

                          <div className="form-outline mb-2">
                            <label className="form-label" for="form3Example8">
                              Address
                            </label>
                            <input
                              type="text"
                              id="form3Example8"
                              name="add"
                              value={input.add}
                              className="form-control form-control-lg"
                              onChange={(e) => onchangehandler(e)}
                            />
                            <p style={{ color: "red" }}>{error.add}</p>
                          </div>

                          <form>
                            <div className="form-outline mb-2">
                              <label
                                className="form-label"
                                for="form3Example90"
                              >
                                Pincode
                              </label>
                              <input
                                type="text"
                                maxLength="6"
                                id="form3Example90"
                                name="pin"
                                value={input.pin}
                                className="form-control form-control-lg"
                                onChange={(e) => onchangehandler(e)}
                              />
                              <p style={{ color: "red" }}>{error.pin}</p>
                            </div>
                          </form>
                          <div className="form-outline mb-2">
                            <label className="form-label" for="form3Example9">
                              DOB
                            </label>
                            <input
                              type="date"
                              id="form3Example9"
                              name="dob"
                              value={input.dob}
                              className="form-control form-control-lg"
                              onChange={(e) => onchangehandler(e)}
                            />
                            <p style={{ color: "red" }}>{error.dob}</p>
                          </div>
                          <div className="form-outline mb-2">
                            <label className="form-label" for="form3Example99">
                              Email ID
                            </label>
                            <input
                              type="text"
                              id="form3Example99"
                              name="mail"
                              value={input.mail}
                              className="form-control form-control-lg"
                              onChange={(e) => onchangehandler(e)}
                            />
                            <p style={{ color: "red" }}>{error.mail}</p>
                            {/* <button onClick={emailvalidation}>check email</button> */}
                          </div>

                          <div className="form-outline mb-2">
                            <label className="form-label" for="form3Example97">
                              Password
                            </label>
                            <input
                              type="text"
                              id="form3Example97"
                              name="password"
                              value={input.password}
                              className="form-control form-control-lg"
                              required
                              onChange={(e) => onchangehandler(e)}
                            />
                            <p style={{ color: "red" }}>{error.password}</p>
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              id="checkbox"
                              name="checkbox"
                              checked={input.checkbox}
                              onChange={(e) => onchangehandler(e)}
                            />
                            <label for="vehicle1">Term&condition. </label>
                            <p style={{ color: "red" }}>{error.checkbox}</p>
                          </div>

                          <div
                            className="d-md-flex justify-content-start align-items-center mb-2 py-2"
                            onChange={(e) => onchangehandler(e)}
                          >
                            <h6 className="mb-0 me-4">Gender: </h6>

                            <div className="form-check form-check-inline mb-0 me-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="femaleGender"
                                value="female"
                              />
                              <label
                                className="form-check-label"
                                for="femaleGender"
                              >
                                Female
                              </label>
                            </div>

                            <div className="form-check form-check-inline mb-0 me-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="maleGender"
                                value="male"
                              />
                              <label
                                className="form-check-label"
                                for="maleGender"
                              >
                                Male
                              </label>
                            </div>

                            <div className="form-check form-check-inline mb-0">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="otherGender"
                                value="other"
                              />
                              <label
                                className="form-check-label"
                                for="otherGender"
                              >
                                Other
                              </label>
                            </div>
                          </div>
                          <p style={{ color: "red" }}>{error.gender}</p>
                          <div className="d-flex justify-content-end pt-3">
                            <button
                              type="button"
                              className="btn btn-light btn-lg"
                              onClick={resetall}
                            >
                              Reset all
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning btn-lg ms-2"
                              onClick={submitform}
                            >
                              Submit form
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
        </form>

        {/* <div>
      <label htmlFor={input.name}>{label}</label>
      <input 
      className={`form-control shadow-none ${meta.touched&& meta.error& 'is valid'}` }
      autoComplete="off"
      {...input}
      ></input>
    </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Signup;
