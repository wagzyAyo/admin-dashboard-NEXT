import { FiDelete } from "react-icons/fi"
import { BiEdit } from "react-icons/bi"
interface idProps {
    id: string
}

const Options = ({id}: idProps) => {
  return (
    <div>
        <div>
            <BiEdit onClick={`/update/${id}`} />
        </div>
      <div>
        <FiDelete onClick={`/api/delete/${id}`} />
      </div>
    </div>
  )
}

export default Options
