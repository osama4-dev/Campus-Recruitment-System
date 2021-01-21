import React,{useState} from 'react';
import ButtonG from '../FieldAndButton/ButtonG'

import InputFields from '../FieldAndButton/InputField'
import {auth,firestore} from '../firebase'
import './Student.css'
//  import './ButtonG.css'


function Student(props) {
   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const res = await auth.createUserWithEmailAndPassword(email,password);
      firestore.collection("users").add({
        firstName,
        lastName,
        userName,
        email,
        password

      });
      props.history.push('/Login')
    }
    catch(error){
      console.log(error.message);
    }
  }

  return (
    <div className="Student">
        
       <h1 className="header1">Student Sign Up Form</h1>
       <form className="student__form">
       <InputFields type="text" label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>


       <InputFields type="text" label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>

       <InputFields type="text" label=" User Name" value={userName} onChange={(e) => setUserName(e.target.value)}/>

       <InputFields type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

       <InputFields type="password" label="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

       <ButtonG onClick={handleSubmit} text="Sign Up" />

       </form>
       
            {/* <InputFields label="Last Name" />
            <InputFields label="Username"/>
            <InputFields label="Email"/>
           
            <InputFields label="Password"/>
            
            <ButtonG  text="Sign Up" onClick={handleSubmit}/> */}
       
            
        
        
     

          </div>
  );
}
export default Student;
