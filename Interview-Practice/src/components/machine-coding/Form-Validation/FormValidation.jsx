import React, { useState } from 'react'

export default function FormValidation() {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:""
  });
  const [errors,seterrors] = useState({});

const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value});
  //when user start typing it will clear the errors
  seterrors({...errors,[e.target.name]:""});
}

const validateForm = () =>{
  const newerrorss = {}
 if (!formData.name) {
  newerrorss.name = "Name is required";
 }
 if (!formData.email) {
  newerrorss.email = "Email is required";
 }
 else if(!/\S+@\S+\.\S+/.test(formData.email)){
    newerrorss.email = "Invalid email data";
 }
 if (!formData.password) {
  newerrorss.password = "Password is required";
 }
 else if(formData.password.length < 6){
  newerrorss.password = "Password length should be more than 6 "
 }
 seterrors(newerrorss);
 return Object.keys(newerrorss).length === 0 //return true if no errors
}
  const handleSubmit = (e) =>{
    e.preventDefault();
      if (validateForm()) {
        alert(`data is successfully submitted ! \n Name: ${formData.name} \n Email: ${formData.email}`);
        setFormData({name:"", email: "", password:""});
      }
  }
  return (
    <form onSubmit={handleSubmit} style={{margin:"auto", width:"300px", textAlign:"center"}}>
      
        <input type="text" name='name' value={formData.name} placeholder='Type Your name here' onChange={handleChange} />
        <br />
        <span style={{color:"red"}}>{errors.name}</span>
        
        <input type="email" name="email" value={formData.email} placeholder="email" onChange={handleChange} />
        <br />
        <span style={{color:"red"}}>{errors.email}</span>
        
        <input type="password" name='password' placeholder='password' value={formData.password}  onChange={handleChange}/>
        <br />
        <span style={{color:"red"}}>{errors.password}</span>
        <button type='submit'>Submit</button>
    </form>
  )
}
