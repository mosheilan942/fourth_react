import React from 'react';
import Child from './Child'
import {useContext, useRef} from 'react'
import {textContext} from "./App";


type ContextValue =  {
    stata: string | null;
    setStata: React.Dispatch<React.SetStateAction<string | null>>;
  };


function Father() {
    const {setStata} = useContext(textContext) as ContextValue
    const myRef = useRef<HTMLInputElement>(null)
  return (
   <>
   <input ref={myRef} type="text" />
   <button onClick={() => {
    setStata(myRef.current!.value)
   }}>Update text</button>
   <Child/>
   </>
  )
}

export default Father