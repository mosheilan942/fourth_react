import React from 'react'
import {useContext, Dispatch, SetStateAction} from 'react'
import {UserContext, themeContext, user} from "./App.tsx";
// import ThemeSwitcher from "./ThemeSwitcher";


type UserContext =  {
    user: user | null;
    setUser: Dispatch<SetStateAction<user | null>>;
  };

function Header() {
    const obj = useContext(UserContext) 
    const {color} = useContext(themeContext)!;
   
    
    return (
        <>
        <div style={{display:"flex"}}>
        <h1 style={{backgroundColor: color === "dark" ? "black" : "white", color: color === "dark" ? "white" : "black"}}>{obj ? obj.user?.username : "weit"}</h1>
        </div>
        
        </>
       
    )
}

export default Header