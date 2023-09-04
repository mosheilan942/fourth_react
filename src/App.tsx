import React, { createContext, useState, useEffect } from 'react'
import Grandpa from "./Granddpa";
import ThemeSwitcher from "./ThemeSwitcher";
import Header from "./Header";
import Paragraph from './Paragraph';


type ContextValue = {
  stata: string;
  setStata: React.Dispatch<React.SetStateAction<string>>;
};

type ContextColor = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<"dark" | "light">>;
};

export type user = {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}

type UserContext = {
  user: user | null;
  setUser: React.Dispatch<React.SetStateAction<user | null>>;
};


export const textContext = createContext<ContextValue | null>(null);
export const themeContext = createContext<ContextColor | null>(null);
export const UserContext = createContext<UserContext | null>(null);



function App() {
  const [stata, setStata] = useState("hello world");
  const [color, setColor] = useState<"dark" | "light">("dark");
  const [user, setUser] = useState<user | null>(null);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const date = await response.json()
      const random = date[Math.floor(Math.random() * (10 - 1 + 1)) + 1]
      setUser(random)
      console.log("request sent");

    }
    fetchData()
      .catch(console.error);
  }, [])


  return (
    <>
      <themeContext.Provider value={{ color, setColor }}>
        <textContext.Provider value={{ stata, setStata }}>
          <Grandpa />
        </textContext.Provider>
        <UserContext.Provider value={{ user, setUser }}>
        <div style={{display:"flex"}}>
        <ThemeSwitcher />
          <Header />
          <Paragraph/>
        </div>
        </UserContext.Provider>
      </themeContext.Provider>
      {/* <Header/> */}

    </>
  )
}

export default App