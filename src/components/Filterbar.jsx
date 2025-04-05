import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MdWbSunny } from 'react-icons/md';
import { IoMoon } from 'react-icons/io5';

export default function Filterbar() {
  let { filterData, filterHandler, dark, themeHandler } = useContext(AppContext);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-4 px-6 flex items-center space-x-4 overflow-x-auto shadow-md sticky top-0 z-20"> {/* Changed z-10 to z-20 */}
      <button
        className="rounded-full p-2 focus:outline-none transition-colors duration-200"
        onClick={themeHandler}
      >
        {dark ? (
          <div className="text-gray-300 hover:text-white">
            <IoMoon size={24} />
          </div>
        ) : (
          <div className="text-yellow-500 hover:text-yellow-600">
            <MdWbSunny size={24} />
          </div>
        )}
      </button>
      {filterData.map((option) => (
        <button
          key={option}
          onClick={() => filterHandler(option)}
          className="bg-blue-500 dark:bg-blue-700 text-white text-sm font-semibold rounded-full px-3 py-1 hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none transition-colors duration-200"
        >
          #{option}
        </button>
      ))}
    </div>
  );
}