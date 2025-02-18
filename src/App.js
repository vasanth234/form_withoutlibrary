import React, { useState } from 'react';
import FormInput from './FormInput';
import './App.css';

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  const Inputs = [
    {
      id: 1,
      name: "username",
      type: 'text',
      placeholder: 'Username',
      errorMessage:"Username should be 3-16 characters and shouldn't include any special characters!",
      label: "Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:'true'
    },
    {
      id: 2,
      name: "email",
      type: 'email',
      placeholder: 'Email',
      errorMessage:"it should be a valid email address",
      label: "Email",
       required:'true'
    },
    {
      id: 3,
      name: "birthday",
      type: 'date',
      placeholder: 'Birthday',
     label: "Birthday",
     
    },
    {
      id: 4,
      name: "password",
      type: 'password',
      placeholder: 'Password',
      errorMessage:"Password should be 8-20 characters and include at least 1 letter , 1 number and 1 special character",
      label: "Password",
      pattern:`(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
       required:'true'
    },
    {
      id: 5,
      name: "confirmPassword",
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage:"Passwords don't match",
      label: "Confirm Password",
       required:'true'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value]
    });
  };

  //console.log(values);

  return (
    <div className='App'>
      
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {Inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
