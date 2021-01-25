import React, { useState } from "react";
import "./Company.css";
import { auth, firestore } from "../firebase";
import { TextField } from "@material-ui/core";

function Company(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await auth.createUserWithEmailAndPassword(email, password);
      firestore.collection("company_users").doc(res.user.uid).set({
        firstName,
        lastName,
        companyName,
        industry,
        email,
        password,
        role: "company",
        uid: res.user.uid,
      });
      setLoading(false);

      props.history.push("/Login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="Company">
      <h1>Company Sign Up Form</h1>
      <form onSubmit={handleSubmit} className="company-form">
        <TextField
          required
          type="text"
          label="First Name"
          value={firstName}
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
          label="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <TextField
          required
          type="text"
          label="Industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />

        <TextField
          required
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          required
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isLoading ? (
          ""
        ) : (
          <button text="Sign Up" type="submit" className="">
            Sign Up
          </button>
        )}
        {isLoading ? (
          <div>
            <h4>Loading....</h4>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default Company;
