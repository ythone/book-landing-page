import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import useMediaQuery from '../../hooks/useQueryMedia';

type Props = {
    isTopOfPage: boolean;
  };
  

const AppBar = ({isTopOfPage}:Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-black drop-shadow";

  return (
    <nav>
    <div
      className={`${navbarBackground} ${flexBetween} fixed top-0 z-50 w-full py-6`}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16 text-xl`}>
          {/* LEFT SIDE */}
          {/*<img alt="logo" src={Logo} />*/}
          <p className='text-white font-bold flex items-center justify-between'>Book.com</p>

          {/* RIGHT SIDE */}
         
          <div className={`text-white text-xl`}>
                <RiMenu3Fill/>
          </div>
          
        </div>
      </div>
    </div>
  </nav>
  )
}

export default AppBar