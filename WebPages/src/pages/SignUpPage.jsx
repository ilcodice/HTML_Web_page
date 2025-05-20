// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';

// export default function SignUpPage() {
//   const navigate = useNavigate();

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [isError, setError] = useState(false);

//   const nameRegex = /^[A-Z][a-z]+(?:[-'\s][A-Z][a-z]+)*$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

//   const checkCredentials = (e) => {
//     e.preventDefault();

  
//     if (!firstName || !lastName || !email || !password) {
//       setMessage('Please fill all fields ');
//       setError(true);
//       return;
//     }

//     if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
//       setMessage('First and Last Name should begin with capital letter');
//       setError(true);
//       return;
//     }

//     if (!emailRegex.test(email)) {
//       setMessage('wrong email!.');
//       setError(true);
//       return;
//     }

//     if (!passwordRegex.test(password)) {
//       setMessage('Passwort 8-character and include at least one uppercase letter, one lowercase letter, and one number.');
//       setError(true);
//       return;
//     }

//     // All valid
//     setMessage('Registerd!');
//     setError(false);

//     // Navigate to login page after delay
//     setTimeout(() => {
//       navigate('/Login');
//     }, 1000);
//   };

//   return (
//     <div>
//       <div className="w-[100%] flex">
//         <div className="w-[50%] h-screen bg-[#32155B] flex items-center justify-center">
//           <img className="w-[300px]" src="/assets/coding.png" alt="" />
//         </div>

//         <div className="w-[50%] h-screen bg-[#f4f4f4] flex items-center justify-center">
//           <div className="w-[400px] h-[500px] bg-white flex flex-col justify-center items-center rounded-sm shadow-md">
//             <p className="text-[25px] mb-5 text-[#8053FF]">Join Coders Now!</p>

//             <input
//               onChange={(e) => setFirstName(e.target.value)}
//               className="w-[350px] h-10 mb-3 rounded-md bg-[#32155B] text-white pl-2 text-xs"
//               type="text"
//               name="first_name"
//               placeholder="First Name"
//             />
//             <input
//               onChange={(e) => setLastName(e.target.value)}
//               className="w-[350px] h-10 mb-3 rounded-md bg-[#32155B] text-white pl-2 text-xs"
//               type="text"
//               name="last_name"
//               placeholder="Last Name"
//             />
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-[350px] h-10 mb-3 rounded-md bg-[#32155B] text-white pl-2 text-xs"
//               type="email"
//               name="email"
//               placeholder="Email"
//             />
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-[350px] h-10 mb-3 rounded-md bg-[#32155B] text-white pl-2 text-xs"
//               type="password"
//               name="password"
//               placeholder="Password"
//             />

//             <button
//               className="w-[350px] h-10 mb-3 rounded-md bg-[#2d76f3] text-white"
//               onClick={checkCredentials}
//             >
//               Sign Up
//             </button>

//             {message && (  //message && This checks if message has any text.If yes, it runs the code inside (...).Inside the parentheses:{message}
//               <p
//                 className={`text-sm mt-1 mx-7 p-2 font-semibold ${
//                   isError ? 'text-red-500' : 'text-green-500'
//                 }`}
//               >
//                 {message}
//               </p>
//             )}

//             <p className="mt-2 text-xs">
//               Already have an account?
//               <a href="/login">
//                 <span className="text-[#8053FF]"> Login</span>
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/pages/SignUpPage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../auth/authSlice';
import { useNavigate } from 'react-router-dom';

// Validation schema with zod
const schema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .regex(/^[A-Z][a-z]+(?:[-'\s][A-Z][a-z]+)*$/, 'First name must start with a capital letter'),

  lastName: z
    .string()
    .min(1, 'Last name is required')
    .regex(/^[A-Z][a-z]+(?:[-'\s][A-Z][a-z]+)*$/, 'Last name must start with a capital letter'),

  email: z.string().email('Invalid email address'),
  
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/\d/, 'Password must contain at least one number'),
});

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);

  const onSubmit = (data) => {
    dispatch(signupUser(data)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        // navigate on success
        navigate('/login');
      }
    });
  };

  return (
    <div className="w-[100%] flex">
      <div className="w-[50%] h-screen bg-[#32155B] flex items-center justify-center">
        <img className="w-[300px]" src="/assets/coding.png" alt="coding" />
      </div>

      <div className="w-[50%] h-screen bg-[#f4f4f4] flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[400px] h-[500px] bg-white flex flex-col justify-center items-center rounded-sm shadow-md p-4"
        >
          <p className="text-[25px] mb-5 text-[#8053FF]">Join Coders Now!</p>

          <input
            {...register('firstName')}
            className="w-[350px] h-10 mb-1 rounded-md bg-[#32155B] text-white pl-2 text-xs"
            type="text"
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mb-2">{errors.firstName.message}</p>
          )}

          <input
            {...register('lastName')}
            className="w-[350px] h-10 mb-1 rounded-md bg-[#32155B] text-white pl-2 text-xs"
            type="text"
            placeholder="Last Name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mb-2">{errors.lastName.message}</p>
          )}

          <input
            {...register('email')}
            className="w-[350px] h-10 mb-1 rounded-md bg-[#32155B] text-white pl-2 text-xs"
            type="email"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500 text-xs mb-2">{errors.email.message}</p>}

          <input
            {...register('password')}
            className="w-[350px] h-10 mb-1 rounded-md bg-[#32155B] text-white pl-2 text-xs"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mb-2">{errors.password.message}</p>
          )}

          <button
            disabled={authStatus === 'loading'}
            type="submit"
            className="w-[350px] h-10 mt-3 rounded-md bg-[#2d76f3] text-white"
          >
            {authStatus === 'loading' ? 'Signing Up...' : 'Sign Up'}
          </button>

          {authError && (
            <p className="text-red-500 text-sm mt-2 font-semibold">{authError}</p>
          )}

          <p className="mt-2 text-xs">
            Already have an account?{' '}
            <a href="/login" className="text-[#8053FF]">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
