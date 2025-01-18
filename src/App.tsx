import {
  Input,
  Carousel,
  IconButton,
  Button,
} from "@material-tailwind/react";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
 
export default function App() {
  const themeToggleDarkIcon = useRef(null);
  const themeToggleLightIcon = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {

    // Change the icons inside the button based on previous settings
    /* if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        // themeToggleLightIcon.classList.remove('hidden');
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        // themeToggleDarkIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
    } */

    
  }, []);

  const themeToggleBtn = () => {
    setIsVisible(!isVisible)

    // toggle icons inside button
    // themeToggleDarkIcon.classList.toggle('hidden');
    // themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('colorTheme')) {
        if (localStorage.getItem('colorTheme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('colorTheme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('colorTheme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('colorTheme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('colorTheme', 'dark');
        }
    }
    
  };

  return (
    <div className="">
      <Button onClick={themeToggleBtn} id="theme-toggle" type="button" className="float right-0 top-0 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        {isVisible && <svg ref={themeToggleDarkIcon} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>}
        {!isVisible && <svg ref={themeToggleLightIcon} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>}
      </Button>
      <div className="w-72">
        <Input className="dark:text-white dark:bg-gray-800" label="Username" />
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </span>
        </div>
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  );
}