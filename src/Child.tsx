import {useContext} from 'react'
import {textContext} from "./App";

type ContextValue =  {
    stata: string | null;
    setStata: React.Dispatch<React.SetStateAction<string | null>>;
  };


function Child() {
    const {stata} = useContext(textContext) as ContextValue
    
  return (
    <>
    <div>{stata}</div>
    </>
  )
}

export default Child