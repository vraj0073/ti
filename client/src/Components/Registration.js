
import React, { useState } from 'react'
import { Col, Container, Form, InputGroup, Row , Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/Registration.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar';

export const Registration = () => {
    const history = useNavigate();
    const emailRegex = /\S+@\S+\.\S+/;
    const nameRegex = /^[A-Za-z ]+$/;
    const passwordRegex = /^[-@.\/#&+\w\s]*$/;
    const phoneRegex = /^[0-9]*$/;
    const [name,setname] = useState('')
    const [address,setaddress]= useState('')
    const [Phonemessage, setPhoneMessage] = useState('');
    const [Emailmessage, setEmailMessage] = useState('');
    const [Passwordmessage, setPasswordMessage] = useState('');
    const [Confirmmessage, setConfirmMessage] = useState('');
    const [Rolemessage, setRoleMessage] = useState('');
    const [Firstmessage, setFirstMessage] = useState('');
    const [Role,setRole] = useState();
    const [Phonenumber, setPhonenumber] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
   
   
  
    
      

      const validsubmit= (e) =>{
          alert("Registration successfull")
      }
  
    
      
      const validatename = (e) => {
          const firstname = e.target.value;
          console.log(firstname)
          if(nameRegex.test(firstname)){
            setname(firstname)
            setFirstMessage(" ")
           }
           
           else{
             
             setFirstMessage("only letters are permitted!");
            
           }
        };

        const validemail = (event) => {
          const email = event.target.value;
          if (emailRegex.test(email)) {

            setEmail(email)
            setEmailMessage(" ");
            
            
          } else {
            setEmailMessage('Please enter a valid email!');
            
          }
        };
        const validatephone = (e) => {
          const phone = e.target.value;
          if(phoneRegex.test(phone) && phone.length > 9){
            
        
            setPhonenumber(phone)
            setPhoneMessage(" ");
            
          }
          else {
            
            setPhoneMessage('Please entre valid mobile number!');
           
          }
      
        }
        const validpassword = (e) => {
          var password = e.target.value;
          window.pass = password;
          if(passwordRegex.test(password) && password.length >= 8 ){
            setPasswordMessage(" ");
            setPassword(password)
             
      }
           else{
            
             setPasswordMessage("Invalid Password")
             
           }
        };
    
        const validateRole = (e) => {
          var Role = e.target.value;
          
          if(Role == 'NGo'){
            
            setRole(Role)
            
             
             
      }
         else if(Role == 'Resturant'){
         
          setRole(Role)
          
          
          
        }
           else{
        
             setRoleMessage("Select Role!")
             alert("select role")
           }
        };
        const validateaddress = (e) =>{
            const address = e.target.value;
            setaddress(address);

        }
        const validconfim = (e) => {
          const confirmPassword = e.target.value;
          if(confirmPassword === window.pass){
            
            setConfirmMessage("Password Match");
           }
           else{
            
             setConfirmMessage("confirm password does not match!")
           }
        };
  
    return (
      <>  
      
     <Container className='registrationcontainer'>
         
     <Form className='registrationbox'>
     <h1 id='registrationheading'>Registration</h1>
     <div>
     <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>User Name</Form.Label>
    
    <Form.Control required type="text" onChange={validatename} placeholder="Name" autoComplete='off' />
    <small id="passwordHelpBlock" className="error-label form-text text-muted">
  {Firstmessage}</small>
  
  </Form.Group>
  </div>
  <br></br>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Address : </Form.Label>
    <Form.Control required type="email" onChange={validemail} placeholder="Enter email" />
    <div>
    <small id="passwordHelpBlock" className="error-label form-text text-muted">
  {Emailmessage}</small>
  </div>
  </Form.Group>
  <br></br>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password : </Form.Label>
    <Form.Control required onChange={validpassword} type="password" placeholder="Password" />
    <div>
    <small id="passwordHelpBlock" className="error-label form-text text-muted">
  {Passwordmessage}</small>
  </div>
  </Form.Group>
  <br></br>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password : </Form.Label>
    <Form.Control required type="password" onChange={validconfim} placeholder="Password" />
    <div>
    <small id="passwordHelpBlock" className="error-label form-text text-muted">
  {Confirmmessage}</small>
  </div>
  </Form.Group>
  <br></br>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Phone Number : </Form.Label>
    <Form.Control required type="text" onChange={validatephone}  placeholder="Password" />
    <div>
    <small id="passwordHelpBlock" className="error-label form-text text-muted">
  {Phonemessage}</small>
  </div>
  </Form.Group>
  <br></br>
  <Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Address
  </Form.Label>
  <Form.Control required as="textarea" rows="3" onChange={validateaddress}/>
</Form.Group>
<br></br>
<div>Register as : {''}
      <select required onChange={validateRole} defaultValue="Select Role">
        <option defaultValue  >Select Role</option>
        <option value="Resturant" >Resturant</option>
        <option value="NGO" >NGO</option>
        </select>
        </div>
        
  <Button  id='registrationbutton' type="submit" onClick={validsubmit}>
    Submit
  </Button>
</Form>
</Container>
  </>
    )
}

export default Registration;