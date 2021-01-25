import React, { useState } from "react";
import { connect } from "react-redux";
import AuthMiddleWare from "../Store/middleWare/authMiddleWare";
import { Link } from "react-router-dom";
import "./Login.css";
import InputField from "../FieldAndButton/InputField";
import { auth, firestore } from "../firebase";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (email && password) {
        const res = await auth.signInWithEmailAndPassword(email, password);
        const uid = res.user.uid;
        const student = await firestore
          .collection("student_users")
          .doc(uid)
          .get();
        const company = await firestore
          .collection("company_users")
          .doc(uid)
          .get();

        if (student.exists) {
              props.history.push("/StudentDashboard")

        } else if (company.exists) {
               props.history.push("/CompanyDashboard")

        } else {

        }
        // if(student.ex)
        // if (student) {
        //   const studentUsers = firestore.collection("student_users").doc(uid);
        //   studentUsers.get().then(doc => {
        //     const studentData = doc.data();
        //     // console.log(studentData);
        //     const studentRole = studentData.role;
        //     // console.log(studentRole);
        //   }).catch(err => {
        //     console.log(err.message);
        //   })

        //   console.log(studentUsers.get());
        // } else if(firestore.collection("company_users").doc(uid)) {
        //   console.log("COMPANY");
        //   // const companyUsers = firestore.collection("company_users").doc(uid);
        //   // companyUsers.get().then(doc => {
        //   //   console.log(doc.data());
        //   //   const companyData = doc.data();
        //   //   const companyRole = companyData.role;

        //   // }).catch(err => {
        //   //   console.log(err.message);
        //   // })
        // }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(email, password);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return props.authReducer?.isLoading ? (
    <div className="loader"></div>
  ) : (
    <div className="Login">
      <form className="login__form" onSubmit={_onSubmit}>
        <h1>Login</h1>
        <InputField
          type="email"
          label="email"
          name="email"
          required
          maxLength={100}
          value={email}
          onChange={emailHandler}
        />
        <InputField
          type="password"
          label="password"
          onChange={passwordHandler}
          value={password}
          name="password"
          required
          maxLength={100}
        />
        <button type="submit" className="login_btn" value="Login">
          Login
        </button>
        <p>Don't have an account?</p>
        <Link to="/Student" className="nav-link">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

// function mapDispatchToProps(dispatch) {
//   return {
//     SignInDispatch: (data) => dispatch(AuthMiddleWare.signIn(data)),
//   };
// }
// function mapStateToProps(state) {
//   return {
//     authReducer: state.authReducer,
//   };
// }

export default Login;
