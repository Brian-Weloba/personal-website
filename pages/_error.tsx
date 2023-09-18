import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext';
import Link from 'next/link';
import { NextPageContext } from 'next';

// Define the ErrorProps type
type ErrorProps = {
  statusCode: number;
};

Error.getInitialProps = ({ res, err }:NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

// Remove the getInitialProps function for Next.js 10+
function Error({ statusCode }: ErrorProps) {
  const {darkMode, toggleDarkMode} = useDarkMode();

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty('--foreground-rgb', '255, 255, 255');
      root.style.setProperty('--background-start-rgb', '41, 36, 35');
      root.style.setProperty('--background-end-rgb', '0, 0, 0');
    } else {
      root.style.setProperty('--foreground-rgb', '0, 0, 0');
      root.style.setProperty('--background-start-rgb', '214, 219, 220');
      root.style.setProperty('--background-end-rgb', '255, 255, 255');
    }
  }, [darkMode]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex w-fit h-screen px-2 mx-auto bkg border-r-2 bdr flex-col justify-between">
        <div
          className="text-white cursor-pointer mt-4 p-2 bkg-inv rounded-full"
          onClick={toggleDarkMode}>
          {darkMode ? (
            <SunIcon className="w-8 h-8 frg-text-inv" />
          ) : (
            <MoonIcon className="w-8 h-8 frg-text-inv" />
          )}
        </div>
        <div className="text-4xl mx-auto mb-4">
          <Link href='/' className="font-extralight font-jost">
            <span className="font-extrabold">b</span>w
          </Link>
        </div>
      </aside>
      <main className="w-full h-full">
        <nav className="fixed w-full z-50 bkg p-4 border-b-2 bdr">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="text-2xl">
                <Link href='/' className="font-thin font-jost flex">
                  <p  className="font-extrabold">brian</p>weloba
                </Link>
              </div>
              <div
                className="text-white md:hidden cursor-pointer p-2 bkg-inv rounded-full"
                onClick={toggleDarkMode}>
                {darkMode ? (
                  <SunIcon className="w-8 h-8 frg-text-inv" />
                ) : (
                  <MoonIcon className="w-8 h-8 frg-text-inv" />
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-2xl font-jost">
            {statusCode
              ? `Oops! Error ${statusCode}: Our server took an unexpected detour`
              : '404 Error: You ventured off the digital map'}
          </h1>
          <ul className="mt-4">
            <li className="py-2">
              <a href="/" className="bdr cont border-2 font-bold py-2 px-4 flex items-center">
                <FaArrowLeft className="mr-2" />
                <p>Return to Homepage</p>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Error;
