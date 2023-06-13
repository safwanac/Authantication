import axios from 'axios';
import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const Emailchange = (e) => {
      setEmail(e.target.value);
    };

    const Passwordchange = (e) => {
      setPassword(e.target.value);
  };
  
  const navigate = useNavigate();
  const axs = async () => {
    try {
      const data = await axios.post("http://localhost:2999/login", {
        Email,
        Password,
      });
      console.log(data.data);
      if (Email === Email) {
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log("input is not complete", error);
    }
  };
  return (
    <div>
      <MDBContainer fluid style={{ marginTop: "50px" }}>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{
                borderRadius: "1rem",
                maxWidth: "400px",
                height: "500px",
                marginTop: "100px",
              }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">
                  Please enter your login and password!
                </p>

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  placeholder="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  onChange={Emailchange}
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  placeholder="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  onChange={Passwordchange}
                />

                <p className="small mb-3 pb-lg-2">
                  <a class="text-white-50" href="#!">
                    Forgot password?
                  </a>
                </p>
                <MDBBtn
                  className="mx-2 px-5"
                  style={{ color: "white", backgroundColor: "black" }}
                  onClick={axs}
                >
                  Login
                </MDBBtn>
                <br></br>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="#!" class="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login