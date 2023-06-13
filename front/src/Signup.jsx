import React, { useState } from 'react'
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

  const navigate = useNavigate();
    const click = async () => {
      const data = await axios.post("http://localhost:2999/signup", {
        Name,
        Email,
        Password,
      });

      console.log(data.data);

      localStorage.setItem('user', JSON.stringify(data.data))
      if (Name > 2 || Email > 2 || Password > 2) {
      navigate("/login");
    } else {
      navigate("/signup");
    }
  };
  

    const Namechange = (e) => {
      setName(e.target.value);
    };

    const Emailchange = (e) => {
      setEmail(e.target.value);
    };

    const Passwordchange = (e) => {
      setPassword(e.target.value);
    };
  return (
    <div>
      <MDBContainer fluid style={{ marginTop: "150px", width: "900px" }}>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody style={{ marginTop: "80px" }}>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  <b>sign up</b>
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    placeholder="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    onChange={Namechange}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    placeholder="Your Email"
                    id="form2"
                    type="email"
                    onChange={Emailchange}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    placeholder="Password"
                    id="form3"
                    type="password"
                    onChange={Passwordchange}
                  />
                </div>

                <div className="mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Terms & conditions"
                  />
                </div>

                <MDBBtn className="mb-4 success" size="m" onClick={click}>
                  Register
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Signup