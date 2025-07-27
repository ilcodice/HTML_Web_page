import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <img src="./assets/logo.svg" alt="logo" className="h-8 w-auto" />
          <p className="text-xl font-bold text-gray-800">CodeCLA</p>
        </div>
        <Link to="/ChallengeDescription" className="text-gray-700 hover:text-blue-600 text-lg">
          Challenges
        </Link>
        <Link to="/Leaderboard" className="text-gray-700 hover:text-blue-600 text-lg">
          Leaderboard
        </Link>
      </div>

      <div className="flex items-center space-x-4 relative">
        <button className="text-gray-600 hover:text-yellow-500">
          🌙
        </button>

        <span className="text-gray-800 font-medium">Delo</span>

        <div className="relative">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=40"
            alt="avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg py-2 z-10">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
