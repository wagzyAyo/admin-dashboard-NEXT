import axios from "axios"

export const getData = async (endPoint, stateFunction)=>{
    try {
      const response = await axios.get(endPoint)
      stateFunction(response.data)
    } catch (err) {
      console.log("Error getting data",err)
    }
  }