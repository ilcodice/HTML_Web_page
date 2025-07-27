import React from 'react'
import CategoriesList from '../components/CategoriesList'
import ChallengesList from '../components/ChallangesList'
import TreadingCategoriesBox from '../components/TreadingCategoriesBox'
import ThemeToggle from '../components/ThemeToggle'
import TopKCodersList from '../components/TopKCodersList'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-5xl flex justify-between  mx-auto space-y-6">
        <div>
          <CategoriesList />
          <ChallengesList />
        </div>
        <div className='flex flex-col gap-4'>
          <TreadingCategoriesBox />
          <TopKCodersList />
        </div>
      </div>
    </div>
  );
}










// // import React from 'react'
// // import { NavLink } from 'react-router';


// // export default function HomePage() {
// //   return (
// //     <div>
// //       <h1>Hello</h1>

// //       <NavLink to='/Login'>Go To Login</NavLink>
// //       <NavLink to='/SignUp'>Go To Signup</NavLink>

// //     </div>
// //   )
// // }
// import React from 'react'

// export default function HomePage() {
//   return (
//     <div>
          
//         <nav>
//           <div className="navbar">
//             <div className="logo">
//               <img src="./assets/logo.svg" alt="logo" />
//               <p><b>CodeCLA</b></p>
//             </div>

//             <div className="nav-buttons">
//               <div className="left-navbar-a"><a href="#">For Coders</a> <a href="#">For Developers</a></div>
//               <button>Join now</button>
//             </div>
//           </div>
//         </nav>

//         <header>
//           <div className="hero_section">
//             <h1>The place for Competitive Programmers</h1>
//             <p>
//               CodeCLA is where programmers participate contests, solve algorithm and
//               data structure challenges and become a part of anwsome community.
//             </p>
//             <div className="hero-section-buttons">
//               <button>Bocome a coder</button> <button id="right-button">Become a manager</button>
//             </div>
//           </div>

//           <div className="sub-hero">
//             <h2>Practice to level-up</h2>

//             <div className="grid-container">
//               <div className="box-1">
//                 <p>1K</p>
//                 <p>Problems for practice</p>
//               </div>

//               <div className="box-2">
//                 <p>100+</p>
//                 <p>Coders</p>
//               </div>

//               <div className="box-3">
//                 <p>10</p>
//                 <p>Programing languages</p>
//               </div>

//               <div className="box-4">
//                 <p>130K</p>
//                 <p>Suvmissions</p>
//               </div>
//             </div>
//           </div>
//         </header>

//         <main>
//           <div>
//             <div className="main-upper">
//               <h2>For coders</h2>
//               <p id="big-text">What you <br/> will <span>gain</span> </p>

//             <p>
//               You are a coder who wantes to level up his skilles in coding and
//               problem solving?. Here what we provide
//             </p>          
//             </div>

//             <div className="main-container">
//               <div className="first-box">
//                 <img src="./assets/ok.svg" alt="ok logo" />
//                 <p>
//                   Rich practice set of problem <br />
//                   Access a rich library of practice, algorithms, and data <br/>structure
//                   to enhance <br/>your skills
//                 </p>
//               </div>

//               <div className="second-box">
//                 <img src="./assets/ok.svg" alt="ok logo" />
//                 <p>
//                   Universal contests <br />
//                   Compete in regularty scheduled contests against <br/> to talent from
//                   around the globe
//                 </p>
                
//               </div>

//               <div className="third-box">
//                 <img src="./assets/ok.svg" alt="ok logo" />
//                 <p>
//                   Constsnt feedback <br />
//                   Recive personalized insights and feedback to <br/>improve your
//                   problem-solving abilities
//                 </p>
                
//               </div>

//               <div className="fourth-box">
//                 <img src="./assets/ok.svg" alt="ok logo" />
//                 <p>
//                   Sharing is caring <br />Connect with like-minded individuals, from
//                   teams, and tackle challenges together
//                 </p>

//               </div>

//               <div className="fifth-box">
//                 <img src="./assets/ok.svg" alt="ok logo" />
//                 <p>Track your progress and climb the ranks on our leaderboard</p>
                
//               </div>

//               <div className="sixth-box">
//                 <img src="./assets/ok.svg" alt="ok logo" />
//                 <p>Detailed solution for problems</p>
                
//               </div>

//               <button>Join coders community</button>
//             </div>

//           </div>
//           <div className="main-lower">
//             <h2>For manager</h2>
//             <h3>Access <br/><span>high- <br/>professional</span> <br/>platform for <br/>coding <br/>challanges <br/>design</h3>

//             <div className="submain-container">
//               <div className="seventh-box">
//                 <img src="./assets/ok.svg" alt="ok logo" />
//                 <p>
//                 Craft tailored coding challanges suited to your needs and objectives
//                 </p>
//               </div>

//               <div className="eighth-box">
//                 <img src="./assets/ok.svg" alt="ok logo" />
//                 <p>
//                 Design challanges that align perfectly with your recuitment criteria
//                 </p>
//               </div>

//               <div className="ninth-box">
//                 <img src="./assets/ok.svg" alt="ok logo" />
//                 <p>
//                 Choose from a wide range of problem types including algorithmic, data
//                 strudturs, puzzles, and more.
//                 </p>
//               </div>

//               <div className="tenth-box">
//                 <img src="./assets/ok.svg" alt="ok logo" />
//                 <p>Ergibinuc tools for challenges design</p>
//               </div>

//               <div className="eleventh-box">
//                 <img src="./assets/ok.svg" alt="ok logo" />
//                 <p>
//                 Collaborate with colleagues or peers in creating and refining coding
//                 challanges
//                 </p>
//               </div>

//               <div className="twelvth-box">
//                 <img src="./assets/ok.svg" alt="ok logo" />
//                 <p>Access dedicated support from our team of expects</p>
//               </div>
//               <button>Join managers community</button>
//             </div>
              
//           </div>
            
          
//         </main>
//         <section>
//           <div className="upper-part">

//               <img src="./assets/team.svg" alt="delo" />

//               <div className="upper-left">
//                 <img src="./assets/logo.svg" alt="" /> 
//                 <h3>Brought to you by CLA</h3>
//                 <p>
//                   Join the Ultimate Hub fro Competitive Programmers and growth and
//                   excellencne in competitive programming. <br/>
//                   Coding challenges is made simple by our platform. Access a dashboard
//                   of tools for high-quality chalange design
//                 </p>
//             </div>

//           </div>
//           <div className="lower-part">
//               <h2>Testimonials</h2>
//               <div className="lower-part-card">
//               <p>
//                 This guy is an young talented IT professional, proactive and responsible, with a strong work ethic.
//                 He is very strong in PsD2HTML conversions and HTML/CSS technology.He is a quick learner, eager to learn new technologies.
//                 He is focused and has the good dynamics eo achieve due dates and outstanding results
//               </p>
              
//               <p>Delshad Ibrahim</p>
//               <p>Software Engineer</p>
//             </div>
            
//           </div>

//         </section>

//         <footer>
//               <h3>Contact us</h3>
//                 <div className="contact">

//                   <label for="name">Name</label>
//                   <input type="text" name="name" placeholder="Your Name" />

//                   <label for="email">Email</label>
//                   <input type="text" name="email" placeholder="Your Email" />

//                   <label for="Message">Message</label>
//                   <input type="text" name="Message" placeholder="Your Message" id="message" />

//                   <button>Submit</button>
//               </div>
            

//             <p>2024 Your Company Programming Platform all rights reserved.</p>
//         </footer>

      
//     </div>
// )}