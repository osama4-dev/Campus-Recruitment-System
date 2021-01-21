import React from 'react'
import InputFields from '../FieldAndButton/InputField'
import ButtonG from '../FieldAndButton/ButtonG'
import './Company.css'

function Company() {
    return (
        <div className="header1">
            <h1>Company Sign Up  Form</h1>
             <InputFields label="First Name"/>
            <InputFields label="Last Name"/>
            <InputFields label="Company Name"/>
           
            <InputFields label="Industry"/>
            <InputFields label="Email"/>
            <InputFields label="Password"/>
            
            <ButtonG text="Sign Up"/>
        </div>
    )
}

export default Company
