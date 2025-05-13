import React from 'react'
import { useEffect, useState } from 'react'

export default function Leaderboard() {
    const [isDark, setIsDark] = useState(true);
    let togglemode = (value) => {
        setIsDark(value);
        document.getElementById("root").classList.toggle("dark");
    } 

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/leaderboard.json')
        .then((res) => res.json())  // converts data to .json ..(u need this even when ur data is .json)
        .then((json) => setData(json)) // stors data in State
        .catch((err) => console.error('Error by loading data'));
    }, []);
    

  return (
    <div>
        <nav className='flex justify-between  dark:bg-blue-900 dark:text-white items-center' >
            <ul className='flex gap-5 mx-3'>
                <li>ClodeCla</li>
                <li>Challanges</li>
                <li>Leaderboard</li>
            </ul>
            <img src="" alt="" />
            <div >
                {isDark ? 
                    (<button onClick={() => togglemode(false)}><img className='w-10 h-10 p-2 rounded-xl bg-[var(--Neutral-600)] ' src="../public/images/icon-moon.svg" alt="Dark mode" /></button> )
                    : 
                    (<button onClick={() => togglemode(true)}> <img className='w-10 h-10 p-2 rounded-xl bg-[var(--Neutral-600)] ' src="../public/images/icon-sun.svg" alt="Light mode" /></button>)
                }
       
            </div>
        </nav>

        <div className=' table-auto w-full dark:bg-blue-700'>
            <h1 className='mb-10 text-2xl ml-5 dark:text-white'>Leaderboard</h1>
            <table className='dark:text-white dark:bg-blue-500'>
                <thead >
                    <tr>
                    <th className="px-4 pl-2">Rank</th>
                    <th className="px-4 pl-2">First Name</th>
                    <th className="px-4 pl-2">Last Name</th>
                    <th className="px-4 pl-2">Score</th>
                    <th className="px-4 pl-2">Solved Challenges</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                    <tr key={index}>
                        <td className="p-4 py-2">{item.rank}</td>
                        <td className="px-4 py-2">{item.first_name}</td>
                        <td className="px-4 py-2">{item.last_name}</td>
                        <td className="px-4 py-2">{item.score}</td>
                        <td className="px-4 py-2">{item.solved_chalanges}</td>
                    </tr>
                    ))}
                </tbody>
            </table>


        </div>
    
    </div>
  )
}
