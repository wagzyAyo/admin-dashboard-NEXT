import React from "react";
import Options from "./options"

interface cardProps{
    id: string,
    name: string,
    size: string,
    location: string,
    amount: number,
    short: string,
    description: string,
    imageURL: string[],
}


const Card = ({id,name, size, location,short, amount, description}: cardProps) => {

  return (
    <div className="w-[300px] h-[300px] border-[none] rounded-[20px] px-[15px] py-[10px] bg-[#cbc4c4]">
      <div className="flex flex-col justify-start align-middle flex-wrap gap-x-[15px]">
        <Options id={id}/>
        <div><strong>Name:</strong> {name}</div>
        <div><strong>Size:</strong> {size}</div>
        <div><strong>Location:</strong> {location}</div>
        <div><strong>Amount:</strong> {Number(amount)}</div>
        <div><strong>Short:</strong> {short}</div>
        <div><strong>Description:</strong> {description}</div>
        <div></div>
      </div>
    </div>
  )
}

export default Card
