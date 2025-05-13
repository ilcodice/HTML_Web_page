import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function LoginPage() {
  let { user } = useSelector((state)=> state.user); //accressing the state of user
  const navigate  = useNavigate() // we have ti defind the hook outside the function otherwise it gives error

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  // let isAuth = () =>{
  //   if (user){
  //     navigate("/")
  //   }else{
  //     navigate("/SignUp")
  //   }
  // }

    let checkCredentials = () =>{
      if (!emailRegex.test(email)){
        console.log("Wrong Credentiala")
      }if (!PasswordRegex.test(password)){
        console.log("wrong Credentials")
      }if (user) {
        navigate("/")
      }
      else {
        navigate("/SignUp")
      }
    }




  return (
    <div className="w-[100%] flex">
      <div className="w-[50%] h-screen bg-[#32155B] flex items-center justify-center">
        <img className="w-[300px]" src="/assets/coding.png" alt="image" />
      </div>

      <div className="w-6/12 h-screen bg-[#f4f4f4] flex items-center justify-center">
        <div className="w-[400px] h-[320px] bg-white flex flex-col justify-center items-center rounded-sm shadow-md">
          <p className="text-[25px] mb-5 text-[#8053FF]">Join Coders Now!</p>

          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="w-[350px] h-10 mb-3 rounded-md bg-[#32155B] text-white pl-2 text-xs"
            type ="email"
            name="email"
            placeholder="Email"
          />
          <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
            className="w-[350px] h-10 mb-3 rounded-md bg-[#32155B] text-white pl-2 text-xs"
            type="password"
            name="password"
            placeholder="Password"
          />

          <button className="w-[350px] h-10 mb-3 rounded-md bg-[#2d76f3] text-white" onClick={checkCredentials}>
            Login
          </button>

          <p>
            New to CodeCLA?{" "}
            <a href="./signupPage_tailwind.html">
              <span className="text-[#8053FF]">Signup</span>
            </a>
          </p>
        </div>
      </div>
    </div>
   );
  }