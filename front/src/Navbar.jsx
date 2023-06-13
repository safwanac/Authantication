import React from "react";
import "./nav.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBBtn,
  MDBNavbarLink,
  MDBBadge,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Navbar() {
   const getBackgroundImageStyle = () => {
     return {
       backgroundImage:
         "url('https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')",
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
       backgroundPosition: "center center",
     };
   };
  return (
    <div
      style={getBackgroundImageStyle()}
    >
      <MDBNavbar
        fixed="top"
        light
        style={{ height: "65px", backgroundColor: "#DDE7E6" }}
      >
        <MDBContainer>
          <div className="button-container" style={{ marginLeft: "auto" }}>
            <Link to="/signup">
              <MDBBtn
                style={{
                  background:
                    "linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)",
                }}
                color="white"
              >
                Register
              </MDBBtn>
            </Link>
          </div>
          <div style={{}}>
            <Link to="/login">
              <MDBBtn
                style={{
                  background:
                    "linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)",
                }}
                color="warning"
              >
                login
              </MDBBtn>
            </Link>
          </div>
        </MDBContainer>
      </MDBNavbar>
      <div></div>
    </div>
  );
}

export default Navbar;
