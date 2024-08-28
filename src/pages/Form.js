import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './SignUpLogin.css'; // Ensure this file is linked correctly

const SignUpLogin = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  // Define the Yup schema
  const validationSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is a mandatory field"),
    email: yup.string().email("Invalid email format").required("E-mail is a mandatory field"),
    age: yup.number().positive().integer().min(18, "You must be at least 18 years old").required("Age is a mandatory field"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is a mandatory field"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is a mandatory field"),
  });

  // Formik setup for Sign Up form
  const formikSignUp = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Sign Up Form Values:", values);
      // You can perform your sign-up logic here
    },
  });

  // Formik setup for Sign In form
  const formikSignIn = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Invalid email format").required("E-mail is a mandatory field"),
      password: yup.string().min(6, "Password must be at least 6 characters").required("Password is a mandatory field"),
    }),
    onSubmit: (values) => {
      console.log("Sign In Form Values:", values);
      // You can perform your sign-in logic here
    },
  });

  return (
    <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form onSubmit={formikSignUp.handleSubmit}>
          <h1>Create Account</h1>
          <input
            type="text"
            name="fullName"
            placeholder="Name"
            value={formikSignUp.values.fullName}
            onChange={formikSignUp.handleChange}
          />
          {formikSignUp.errors.fullName && formikSignUp.touched.fullName ? (
            <div className="error">{formikSignUp.errors.fullName}</div>
          ) : null}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formikSignUp.values.email}
            onChange={formikSignUp.handleChange}
          />
          {formikSignUp.errors.email && formikSignUp.touched.email ? (
            <div className="error">{formikSignUp.errors.email}</div>
          ) : null}

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formikSignUp.values.age}
            onChange={formikSignUp.handleChange}
          />
          {formikSignUp.errors.age && formikSignUp.touched.age ? (
            <div className="error">{formikSignUp.errors.age}</div>
          ) : null}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formikSignUp.values.password}
            onChange={formikSignUp.handleChange}
          />
          {formikSignUp.errors.password && formikSignUp.touched.password ? (
            <div className="error">{formikSignUp.errors.password}</div>
          ) : null}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formikSignUp.values.confirmPassword}
            onChange={formikSignUp.handleChange}
          />
          {formikSignUp.errors.confirmPassword && formikSignUp.touched.confirmPassword ? (
            <div className="error">{formikSignUp.errors.confirmPassword}</div>
          ) : null}

          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form onSubmit={formikSignIn.handleSubmit}>
          <h1>Sign in</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formikSignIn.values.email}
            onChange={formikSignIn.handleChange}
          />
          {formikSignIn.errors.email && formikSignIn.touched.email ? (
            <div className="error">{formikSignIn.errors.email}</div>
          ) : null}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formikSignIn.values.password}
            onChange={formikSignIn.handleChange}
          />
          {formikSignIn.errors.password && formikSignIn.touched.password ? (
            <div className="error">{formikSignIn.errors.password}</div>
          ) : null}

          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;
