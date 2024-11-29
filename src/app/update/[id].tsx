"use client"
import { useEffect } from "react"

const Update = ({params}: {params: {id: string}}) => {

    const {id} = params

    useEffect(()=>{
        console.log(`id, ${id}`)
    }, [id])
  return (
    <div>
      <h2 className="text-2xl">{id}</h2>
    </div>
  )
}

export default Update
