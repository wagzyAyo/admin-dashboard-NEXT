"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { checkAuth } from "@/utils/utils";

export default function Home() {
  const [tag, setTag] = useState("sale");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [short, setShort] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(()=>{
    checkAuth(useRouter)
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.post('/api/newproperty', {
        tag,
        name,
        short,
        size,
        amount,
        location,
        description,
        imageURL: url,
      });
      if (response.status === 200) {
        setMessage("New property added successfully!");
        // Clear form
        setTag("sale");
        setName("");
        setLocation("");
        setSize("");
        setShort("");
        setAmount("");
        setDescription("");
        setUrl("");
      } else {
        setMessage("Failed to add new property");
      }
    } catch (err) {
      setMessage("Error adding new property");
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-8 sm:p-20">
      <h1 className="text-2xl mb-8">Add New Property</h1>
      {message && <div className="mb-4 text-center text-sm text-red-500">{message}</div>}
      <form onSubmit={handleSubmit} className="w-full max-w-4xl grid gap-6">
        {/* Radio buttons */}
        <div className="flex gap-6">
          {["sale", "rent", "lease"].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="tag"
                value={option}
                checked={tag === option}
                onChange={(e) => setTag(e.target.value)}
                className="mr-2"
              />
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          ))}
        </div>

        {/* Input fields */}
        {[
          { label: "Name", value: name, setValue: setName },
          { label: "Location", value: location, setValue: setLocation },
          { label: "Size", value: size, setValue: setSize },
          { label: "Short Description", value: short, setValue: setShort },
          { label: "Amount", value: amount, setValue: setAmount },
          { label: "Image URL", value: url, setValue: setUrl },
        ].map(({ label, value, setValue }) => (
          <div key={label} className="w-full">
            <label className="block mb-2 text-sm font-semibold">{label}</label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={`Enter ${label.toLowerCase()}`}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              required
            />
          </div>
        ))}

        {/* Description Textarea */}
        <div className="w-full">
          <label className="block mb-2 text-sm font-semibold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter full description"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow resize-none"
            rows={5}
            required
          />
        </div>

          {/* Submit button */}
          <button
          type="submit"
          disabled={loading}
          className={`mt-4 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>
    </div>
  );
}
