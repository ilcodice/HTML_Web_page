import React, { useState, useEffect, useRef } from 'react';
import generateData from "../components/generateData"
import ReactApexChart from 'react-apexcharts';
import ProgressBar from "@ramonak/react-progress-bar";





export default function Profile() {
  const [isDark, setIsDark] = useState(true);
  const [previewSrc, setPreviewSrc] = useState('https://via.placeholder.com/150');
  const fileInputRef = useRef(null);

  const togglemode = (value) => {
    setIsDark(value);
    document.getElementById("root").classList.toggle("dark");
  };

  const [data, setData] = useState([]);
    useEffect(()=>{
      fetch('/leadboard.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('error by loading data'));
      
    }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  

    const [state, setState] = React.useState({
      
        series: [{
          name: 'Mon',
          data: generateData(30, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Tues',
          data: generateData(30, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Wed',
          data: generateData(30, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Ther',
          data: generateData(30, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Fri',
          data: generateData(30, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Sat',
          data: generateData(30, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Sun',
          data: generateData(30, {
            min: 0,
            max: 90
          })
        },
        ],
        options: {
          chart: {
            height: 350,
            type: 'heatmap',
          },
          dataLabels: {
            enabled: false
          },
          colors: ["#008FF3"],
          title: {
            text: 'HeatMap Chart (Single color)'
          },
        },



 
      
    });

    

  return (
    <div >
      <nav className='flex justify-between bg-gray-300 dark:bg-blue-900 dark:text-white items-center'>
        <ul className='flex gap-5 mx-3'>
          <li>ClodeCla</li>
          <li>Challanges</li>
          <li>Leaderboard</li>
        </ul>
        <div>

            </div>
            <div >
                {isDark ? 
                    (<button onClick={() => togglemode(false)}><img className='w-10 h-10 p-2 rounded-xl bg-[var(--Neutral-600)] ' src="../public/images/icon-moon.svg" alt="Dark mode" /></button> )
                    : 
                    (<button onClick={() => togglemode(true)}> <img className='w-10 h-10 p-2 rounded-xl bg-[var(--Neutral-600)] ' src="../public/images/icon-sun.svg" alt="Light mode" /></button>)
                }
       
            </div>
        </nav>
        <div className='grid grid-cols-2'>
                <div className='flex flex-col mx-5 mt-3'>
                    <p>Rank:</p>
                    <form>
                        <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        />
                        <label htmlFor="fileInput" className="block w-[100px] h-[100px] cursor-pointer bg-gray-300 rounded-full overflow-hidden">
                        <img src={previewSrc}/>
                        </label>
                    </form>
                    <h1 className='text-xl'>Omar Moukhfi</h1>
                    <label className='text-[12px]' for="first_name">First Name</label>
                    <input type="text" id="first_name" name="first_name"  className='border-1 rounded-[5px] h-8 text-[14px]'/>

                    <label className='text-[12px]' for="last_name">Last Name</label>
                    <input type="text" id="last_name" name="last_name"  className='border-1 rounded-[5px] h-8 text-[14px]'/>

                    <label className='text-[12px]' for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="email@domain.com" readOnly className='border-1 rounded-[5px] h-8 text-[14px]'/>

                    <label className='text-[12px]' for="about">Tell us more about you</label>
                    <textarea  id="about" name="About" placeholder='About' className='border-1 rounded-[5px] h-20 text-[14px]'></textarea>

                    <button className='flex items-center justify-center ml-auto w-14 h-8 rounded-sm bg-indigo-400 text-[12px] text-white'>Update</button>
                </div>

                <div>

                    <div className='flex flex-col gap-2'>
                      <p className='text-center'>Easy:</p>
                      <ProgressBar 
                        completed={50}
                        bgColor="#a3e621"
                        height="25px"
                        width="80%"
                        margin='Auto'
                        labelColor="#ffffff"
                        />
                        <p className='text-center'>Moderate:</p>
                        <ProgressBar 
                          completed={20}
                          bgColor="#e6a521"
                          height="25px"
                          width="80%"
                          margin='Auto'
                          labelColor="#ffffff"
                          />
                          <p className='text-center'>Hard:</p>
                          <ProgressBar 
                            completed={1}
                            bgColor="#ee2d00"
                            height="25px"
                            width="80%"
                            margin='Auto'
                            labelColor="#fbfbfb"
                            />
                    </div>


                    <div id="chart">
                        <ReactApexChart options={state.options} series={state.series} type="heatmap" height={350} />
                    </div>

                </div>

            
            </div>
        </div>
        
  )
  
}

