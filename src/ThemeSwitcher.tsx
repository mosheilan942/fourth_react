import React from 'react'
import {themeContext} from "./App";
import {useContext} from 'react'
// import Paragraph from "./Paragraph";

type ContextColor =  {
    color: string;
    setColor: React.Dispatch<React.SetStateAction<"dark" | "light">>;
  };

function ThemeSwitcher() {
    const {color, setColor} = useContext(themeContext) as ContextColor

  return (
    <>
    <button onClick={() => color === "dark" ? setColor("light") : setColor("dark")}>Chenge Theme</button>
    
    </>
  )
}

export default ThemeSwitcher