
import React from 'react';
import { Moon, Sun, GraduationCap } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="py-8 px-4 text-center space-y-4">
      <div className="flex justify-center mb-2">
        <div className="p-4 bg-blue-600 text-white rounded-3xl shadow-xl shadow-blue-500/20 rotate-3 hover:rotate-0 transition-transform duration-300 cursor-default">
          <GraduationCap className="w-10 h-10" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
        ياسر يحسب لك معدلك
      </h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto font-medium">
        ياربي ياسر يطلع العام هو واصدقائه
      </p>
      
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 left-6 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 transition-all hover:scale-110 active:scale-95 z-50"
        aria-label="Toggle Theme"
      >
        {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
      </button>
    </header>
  );
};

export default Header;
