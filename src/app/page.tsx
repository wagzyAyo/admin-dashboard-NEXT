"use client"
import { useState } from "react";

export default function Home() {
  const [tag, setTag] = useState("sale")
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [size, setSize] = useState("")
  const [short, setShort] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("")

  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center p-8 gap-16 sm:p-20">
      <h1 className="text-2xl">Add new property</h1>
      <form action="" method="POST">
        <div>
          <input type="radio" name="sale" id="sale"className="mx-2"
          value={'sale'}
          checked={tag == 'sale'}
          onChange={e => setTag(e.target.value)}
          />
          <label htmlFor="sale">Sale</label>
        </div>
        <div>
          <input type="radio" name="rent" id="rent"className="mx-2" 
          value={'rent'}
          checked={tag == 'rent'}
          onChange={e => setTag(e.target.value)}
          />
          <label htmlFor="rent">Rent</label>
        </div>
        <div>
          <input type="radio" name="lease" id="lease"className="mx-2" 
          value={"lease"}
          checked={tag == 'lease'}
          onChange={e => setTag(e.target.value)}
          />
          <label htmlFor="lease">Lease</label>
        </div>

        <div className="grid justify-center align-middle w-full max-w-sm min-w-[200px]">
          <label htmlFor="name">Name</label>
          <input 
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type="text" name="name" placeholder="Enter property name" 
          value={name} onChange={e => setName(e.target.value)}/>
        </div>

        <div className="grid justify-center align-middle w-full max-w-sm min-w-[200px]">
          <label htmlFor="location">Location</label>
          <input 
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type="text" name="location" placeholder="Enter property location" 
          value={location} onChange={e => setLocation(e.target.value)}/>
        </div>

        <div className="grid justify-center align-middle w-full max-w-sm min-w-[200px]">
          <label htmlFor="size">Size</label>
          <input 
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type="text" name="size" placeholder="Enter property size" 
          value={size} onChange={e => setSize(e.target.value)}/>
        </div>

        <div className="grid justify-center align-middle w-full max-w-sm min-w-[200px]">
          <label htmlFor="short">Short</label>
          <input 
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type="text" name="short" placeholder="Enter short description" 
          value={short} onChange={e => setShort(e.target.value)}/>
        </div>

        <div className="grid justify-center align-middle w-full max-w-sm min-w-[200px]">
          <label htmlFor="amount">Amount</label>
          <input 
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type="text" name="amount" placeholder="Enter amount" 
          value={amount} onChange={e => setAmount(e.target.value)}/>
        </div>

        <div className="grid justify-center w-full max-w-sm min-w-[200px]">
          <label htmlFor="description">Description</label>
          <textarea 
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          name="description" placeholder="Enter full description" 
          value={description} onChange={e => setDescription(e.target.value)}/>
        </div>

        <div className="grid justify-center align-middle w-full max-w-sm min-w-[200px]">
          <label htmlFor="url">Image URL</label>
          <input 
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type="text" name="url" placeholder="Enter image Urls seperated by commas" 
          value={url} onChange={e => setUrl(e.target.value)}/>
        </div>


      </form>
    </div>
  );
}
