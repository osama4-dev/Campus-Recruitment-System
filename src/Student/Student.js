import React, { useState } from "react";
import ButtonG from "../FieldAndButton/ButtonG";

import { auth, firestore } from "../firebase";
import "./Student.css";
import { TextField } from "@material-ui/core";

//  import './ButtonG.css'

function Student(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(firstName === ""){
      console.log("please enter first name")
    }
    try {
      setLoading(true);

      const res = await auth.createUserWithEmailAndPassword(email, password);

      firestore.collection("student_users").doc(res.user.uid).set({
        firstName,
        lastName,
        userName,
        email,
        password,
        role: "student",
      });
      setLoading(false);
      props.history.push("/Login");

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="Student">
      <h1 className="header1">Student Sign Up Form</h1>
      <form onSubmit={handleSubmit} className="student__form">

        <TextField
          type="text"
          label="First Name"
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
        required
          type="text"
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <TextField
        required
          type="text"
          label=" User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
        required
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          type="password"
          label="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isLoading ? "" : (
          <button type="submit">Sign Up</button>)}
        {isLoading ? <div><h4>Loading....</h4></div> : ''}
      </form>
    </div>
  );
}
export default Student;
