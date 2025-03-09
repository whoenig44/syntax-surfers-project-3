import React, { useState, FormEvent, ChangeEvent } from "react";
// import Auth from '../../utils/auth';  // Import the Auth utility for managing authentication state
// import { login } from "../../api/authAPI";  // Import the login function from the API
// import { UserLogin } from "../../interfaces/UserLogin";  // Import the interface for UserLogin
import { useMutation, gql } from "@apollo/client";

const apiEndPoint = process.env.NODE_ENV === 'production' ? "": 'http://localhost:3001';

const SIGNUP = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
    
      id
}
  }
`;

const Signup = () => {
  const [signupUser, { loading, error, data }] = useMutation(SIGNUP);
  // State to manage the login form data
  const [signupData, setSignupData] = useState<any>({
    username: '',
    password: '',
    email: ''
  });

  // Handle changes in the input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    });
  };

  // Handle form submission for login
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Call the login API endpoint with loginData
    //   const data = await login(loginData);
      // If login is successful, call Auth.login to store the token in localStorage
    //   Auth.login(data.token);
    // const res = await fetch(`${apiEndPoint}/api/login`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(loginData)
    // })
    // const data = await res.json();
    // console.log(data);
    signupUser({
      variables: {
        username: signupData.username || '',
        email: signupData.email || '',
        password: signupData.password || ''
      },
      onCompleted: (data) => {
        console.log(data);
        // localStorage.setItem('token', data.login.token);
        window.location.assign('/login');
      },
      
    });
    

    } catch (err) {
      console.error('Failed to sign up', err);  // Log any errors that occur during signup
      alert('Failed to sign up');
    }
  };

  return (
    <div className='form-container'>
      <form className='form signup-form' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {/* Username input field */}
        <div className="form-group">
          <label>Username</label>
          <input 
            className="form-input"
            type='text'
            name='username'
            value={signupData.username || ''}
            onChange={handleChange}
          />
        </div>
         {/* Email input field */}
         <div className="form-group">
          <label>Email</label>
          <input 
            className="form-input"
            type='email'
            name='email'
            value={signupData.email || ''}
            onChange={handleChange}
          />
        </div>
        {/* Password input field */}
        <div className="form-group">
          <label>Password</label>
          <input 
            className="form-input"
            type='password'
            name='password'
            value={signupData.password || ''}
            onChange={handleChange}
          />
        </div>
        {/* Submit button for the signup form */}
        <div className="form-group">
          <button className="btn btn-primary" type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  )
};

export default Signup;
