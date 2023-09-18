import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import '../src/app/globals.css'
import { useEffect, useState } from 'react';
export default function Custom404() {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty("--foreground-rgb", "255, 255, 255");
      root.style.setProperty("--background-start-rgb", "41, 36, 35");
      root.style.setProperty("--background-end-rgb", "0, 0, 0");
    } else {
      root.style.setProperty("--foreground-rgb", "0, 0, 0");
      root.style.setProperty("--background-start-rgb", "214, 219, 220");
      root.style.setProperty("--background-end-rgb", "255, 255, 255");
    }
  }, [darkMode]);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
          <p className="font-extralight font-jost">
            <span className="font-extrabold">b</span>w
          </p>
        </div>
      </aside>
      <main className="w-full h-full ">
        <nav className="fixed  w-full z-50 bkg p-4 border-b-2 bdr">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="text-2xl">
                <p className="font-thin font-jost">
                  <span className="font-extrabold">brian</span>weloba
                </p>
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
        <div className=" flex justify-center items-center h-full">
          <h1 className=' text-2xl font-jost'>404 - PAGE NOT FOUND</h1>
        </div>
      </main>
    </div>)
}