"use client"
import { useState, useEffect } from "react"
import Card from "@/components/card"
import axios from "axios"


interface propData {
  _id: string,
  name: string,
  size: string,
  shortDescription: string,
  amount: number,
  location: string,
  description: string,
  imageURL: string[]
}
const Page = () => {
  const [data, setData] = useState<propData[]>([])

  useEffect(()=>{
    const getData = async ()=>{
      try {
        const response = await axios.get('/api/sales')
        setData(response.data)
      } catch (err) {
        console.log("Error getting data",err)
      }
    }
    getData()
   
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl">Sales</h1>
      <div className="mt-[40px] flex gap-[20px] flex-wrap align-middle justify-start">
         {data.map((propData)=>{
          return <Card  
          key={propData._id} 
          name={propData.name} 
          size={propData.size} 
          amount={propData.amount} 
          short={propData.shortDescription} 
          location={propData.location} 
          description={propData.description} 
          imageURL={propData.imageURL}/>
         })}
         </div>
    </div>
  )
}

export default Page
