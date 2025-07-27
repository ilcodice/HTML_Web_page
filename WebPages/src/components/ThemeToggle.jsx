import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../src/store/slices/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="text-sm px-4 py-2 border rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
