import { useContext } from 'react'
import { themeContext } from './App';



function Paragraph() {
    const {color} = useContext(themeContext)!;


  return (
    <>
    <h1 style={{backgroundColor: color === "dark" ? "black" : "white", color: color === "dark" ? "white" : "black"}}>Lorem ipsum dolor sit</h1>
    <p style={{backgroundColor: color === "dark" ? "black" : "white", color: color === "dark" ? "white" : "black"}}>
    amet consectetur adipisicing elit. Voluptatem error perferendis
     ut voluptates quia labore nostrum accusantium minima iste ipsa
    ipsum officia in dicta cupiditate, impedit veniam. Dolores, tenetur illum?
    </p>
    </>
  )
}

export default Paragraph