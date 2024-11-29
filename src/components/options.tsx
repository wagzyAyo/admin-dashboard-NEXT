
import { MdOutlineDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import axios from "axios"
import { useRouter } from "next/navigation";

interface idProps {
    id: string
}

const Options = ({id}: idProps) => {

    const route = useRouter();

    const handleUpdate = ()=>{
        route.push(`/update/${id}`)
    }

    const handleDelete = async ()=>{
        const response = await axios.delete(`/api/delete/${id}`)
        if(response.status === 200){
            
        }else{
            console.log('Error deleting property')
        }
    }
  return (
    <div className="flex justify-center h-[20%] w-[20%] p-1 bg-white/30 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 gap-3">
        <div className="cursor-pointer ">
            <MdModeEdit onClick={handleUpdate} color="green"/>
        </div>
      <div className="cursor-pointer ">
        <MdOutlineDelete onClick={handleDelete} color="red" />
      </div>
    </div>
  )
}

export default Options
