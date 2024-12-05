"use client"
import { useState, useEffect } from "react"
import Card from "@/components/card"
import { useRouter } from "next/router"
import { getData, checkAuth} from "@/utils/utils"

interface propData {
  _id: string,
  name: string,
  size: string,
  short: string,
  amount: number,
  location: string,
  description: string,
  imageURL: string[]
}

const Page = () => {
  const [data, setData] = useState<propData[]>([]);

  useEffect(()=>{
    checkAuth(useRouter)
    getData('/api/lease', setData)
    
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl text-center">Lease</h1>
      <div className="mt-[40px] flex gap-[20px] flex-wrap align-middle justify-start">
         {data.map((propData)=>{
          return <Card  
          key={propData._id}
          id={propData._id}
          name={propData.name} 
          size={propData.size} 
          amount={propData.amount} 
          short={propData.short} 
          location={propData.location} 
          description={propData.description} 
          imageURL={propData.imageURL}
          fetchData={()=>getData('/api/lease', setData)}
          endPoint={'/api/lease'}
          func={setData}
          />
         })}
         </div>
    </div>
  )
}

export default Page
