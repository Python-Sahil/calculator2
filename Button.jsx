import React,{useState} from 'react'
const Button = ({num,name,value,onClick}) => {
  
  return (
    <button onClick={()=> onClick(value)} className={name}>{num}</button>
  )
}

export default Button

