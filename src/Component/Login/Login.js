import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";
import { TextField } from "@mui/material";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
      MDBCol,
   MDBRow,
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox

}
from 'mdb-react-ui-kit';

import './Login.css'
YupPassword(yup);

const formValidationschema = yup.object({
  email: yup.string().min(10, "Error").required("THIS IS REQUIRED"),
  password: yup
    .string()
    .password()
    .minLowercase(2)
    .min(
      8,
      "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("THIS IS REQUIRED"),
});
function Login() {

    
  const navigate = useNavigate();
  const[data,setdata]=useState([])
    const { handleChange, handleBlur, errors, touched, values, handleSubmit } =
      useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: formValidationschema,
        onSubmit: (values) => {
          oldlist(values);
        },
      });
  
      
    const oldlist = async (values) => {
      try {
        await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          if (res.status === 200) {
            if(values.email==="user@gmail.com"){
  window.alert("sucessfull login");
            navigate("/class");
            window.localStorage.setItem("id",values.email);
            } else{
            window.alert("sucessfull login");
            navigate("/admin");
            }
          }
          else {
            console.log(res.status);
          }
        });
        
      } catch (err) {
        console.log("error");
      }
    };


    

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  return <>
  <form onSubmit={handleSubmit}>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

            <div  className='adjust'>
        <label>Email</label>

        <TextField  wrapperClass='mb-4' label='Email address'id='form1 '
           
           name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="email"
              placeholder="email"
              error={errors.email && touched.email}
              helperText={errors.email && touched.email ? errors.email : ""}  />

<label>Password</label>
            <TextField  
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type="password"
              placeholder="password"
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password ? errors.password : ""
              }
            />
</div>
          <div className="d-flex justify-content-between mx-4 mb-4">
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn type="submit" className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>



          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn type="submit" className="mb-4 w-100">Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>

 </form>

   
   
  </>
}

export default Login