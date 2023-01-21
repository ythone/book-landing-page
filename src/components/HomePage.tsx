import React, { useEffect, useState } from 'react'
import AppBar from './Appbar/AppBar'
import Home from './Home/Home'

const HomePage = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY === 0) {
              setIsTopOfPage(true);
          }
          if (window.scrollY !== 0) setIsTopOfPage(false);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='bg-[#07070a]'>
      <AppBar isTopOfPage={isTopOfPage}/>
      <Home/>
    </div>
  )
}

export default HomePage