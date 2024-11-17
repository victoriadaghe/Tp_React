import { h1 } from 'framer-motion/client'
import React from 'react'


interface IPropsMIPrimerComponente{
    text:string
    color: string;
    fontSize?: number

}

export const MIPrimerComponente = ({text,color,fontSize}) => {
  return (
   
    <div style={{color: `${color}`,fontSize: `${fontSize || 6}rem`}}><p>{text}</p></div>



  )
}
