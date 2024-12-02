"use client";
import { use, useEffect, useState, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface PropData {
  _id: string;
  tag: string;
  name: string;
  size: string;
  short: string;
  amount: number;
  location: string;
  description: string;
  imageURL: string[];
}

const Update = ({ params }: { params: Promise<{ id: string }>}) => {
  const { id } = use(params);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [propData, setPropData] = useState<PropData | null>(null); 
  const router = useRouter()

  const [tag, setTag] = useState("sale");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [short, setShort] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/property/${id}`);
        if (response.status !== 200) {
          throw new Error("Failed to fetch property data");
        }
        const data: PropData = response.data;
        setPropData(data);

        // Initialize form fields with fetched data
        setTag(data.tag);
        setName(data.name);
        setLocation(data.location);
        setSize(data.size);
        setShort(data.short);
        setAmount(data.amount.toString()); // Ensure amount is a string for input field
        setDescription(data.description);
        setUrl(data.imageURL);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };
    getData();
  }, [id]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.put(`/api/update/${id}`, {
        tag,
        name,
        short,
        size,
        amount: parseInt(amount), // Convert amount to number
        location,
        description,
        imageURL: url,
      });

      if (response.status === 200) {
        setMessage("Property updated successfully!");
        router.push('/')
      } else {
        setMessage("Failed to update property");
      }
    } catch (err) {
      setMessage("Error updating property");
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-8 sm:p-20">
      <h1 className="text-2xl mb-8">Update Property</h1>
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
        {[{ label: "Name", value: name, setValue: setName },
          { label: "Location", value: location, setValue: setLocation },
          { label: "Size", value: size, setValue: setSize },
          { label: "Short Description", value: short, setValue: setShort },
          { label: "Amount", value: amount, setValue: setAmount },
          
          { label: "Image URL", value: url.join(", "), setValue: (val) => setUrl(val.split(", ")) },
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
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  )
};

export default Update;
