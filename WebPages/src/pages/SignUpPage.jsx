import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function SignUpPage() {
  let { user } = useSelector((state)=> state.user); //accressing the state of user
  const navigate  = useNavigate() // we have ti defind the hook outside the function otherwise it gives error
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameRegex = /^[A-Z][a-z]+(?:[-'\s][A-Z][a-z]+)*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;


  const checkCredentials = () => {
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      alert("Wrong first or last name. Try again.");
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert("Wrong credentials");
      return;
    }
  
    if (!passwordRegex.test(password)) {
      alert("Wrong credentials.");
      return;
    }
  
    navigate("/Login");
  };
  





  return (
    <div>
      <div className="w-[100%] flex">
        <div className="w-[50%] h-screen bg-[#32155B] flex items-center justify-center">
          <img className="w-[300px]" src="/assets/coding.png" alt="" />
        </div>

        <div className="w-[50%] h-screen bg-[#f4f4f4] flex items-center justify-center">
          <div className="w-[400px] h-[450px] bg-white flex flex-col justify-center items-center rounded-sm shadow-md">
            <p className="text-[25px] mb-5 text-[#8053FF]">Join Coders Now!</p>

            <input
             onChange={(e) => setFirstName(e.target.value)}
              className="w-[350px] h-10 mb-3 rounded-md bg-[#32155B] text-white pl-2 text-xs"
              type="text"
              name="first_name"
              placeholder="First Name"
            />
            <input
             onChange={(e) => setLastName(e.target.value)}
              className="w-[350px] h-10 mb-3 rounded-md bg-[#32155B] text-white pl-2 text-xs"
              type="text"
              name="last_name"
              placeholder="Last Name"
            />
            <input
             onChange={(e) => setEmail(e.target.value)}
              className="w-[350px] h-10 mb-3 rounded-md bg-[#32155B] text-white pl-2 text-xs"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
             onChange={(e) => setPassword(e.target.value)}
              className="w-[350px] h-10 mb-3 rounded-md bg-[#32155B] text-white pl-2 text-xs"
              type="password"
              name="password"
              placeholder="Password"
            />

            <button className="w-[350px] h-10 mb-3 rounded-md bg-[#2d76f3] text-white" onClick={checkCredentials}>
              Sign Up
            </button>

            <p>
              Already have an account?{' '}
              <a href="./login_tailwind.html">
                <span className="text-[#8053FF]">Login</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
