"use client";
import { useEffect, useState } from "react";

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

const Update = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [propData, setPropData] = useState<PropData | null>(null); 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/property/${id}`);  // Fetch data from API
        if (!response.ok) {
          throw new Error("Failed to fetch property data");
        }
        const data = await response.json();
        setPropData(data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };
    getData();
  }, [id]);

  if (!propData) return <div>Loading...</div>;  // Handle loading state

  return (
    <div>
      <h2 className="text-center">{propData.name}</h2>
      {/* Display or edit property data */}
    </div>
  );
};

export default Update;
