import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import axios from "axios"
import { useRouter } from "next/navigation";

interface cardProps{
    id: string,
    name: string,
    size: string,
    location: string,
    amount: number,
    short: string,
    description: string,
    imageURL: string[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fetchData: (endPoint: string, stateFunction: (data: any) => void) => Promise<void>;
    endPoint: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    func: (data: any) => void
}


const Card = ({id,name, size, location,short, amount, description, fetchData, endPoint, func}: cardProps) => {
  const router = useRouter()

  const handleUpdate = ()=>{
    router.push(`/update/${id}`)
}

const handleDelete = async ()=>{
  
  try {
    const response = await axios.delete(`/api/delete/${id}`)
    console.log(response.status)
    if(response.status === 200){
        fetchData(endPoint, func )
        router.refresh()
    }else{
        console.log('Error deleting property')
    }
  } catch (err) {
    console.log('Error deleting the property', err);
    alert("There was an error deleting property");
  }
    
}

  return (
    <div className="w-[300px] h-[300px] border-[none] rounded-[20px] px-[15px] py-[10px] bg-[#cbc4c4]">
       <div className="flex justify-center h-[auto] w-[60px] p-3 bg-white/30 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 gap-3">
        <div className="cursor-pointer ">
            <MdModeEdit onClick={handleUpdate} color="green"/>
        </div>
      <div className="cursor-pointer ">
        <MdOutlineDelete onClick={handleDelete} color="red" />
      </div>
    </div>
      <div className="flex flex-col justify-start align-middle flex-wrap gap-x-[15px]">
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
