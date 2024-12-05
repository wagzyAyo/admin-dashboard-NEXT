import axios from "axios"

export const getData = async (endPoint, stateFunction)=>{
    try {
      const response = await axios.get(endPoint)
      stateFunction(response.data)
    } catch (err) {
      console.log("Error getting data",err)
    }
  }

  export const checkAuth = async (Router)=>{
    const router = Router()
    try {
      const response = await fetch('/api/check-auth', {method: 'GET',credentials: 'include'})
      if(response.ok){
        const data = await response.json();
        console.log('User Authenticated', data.user)
      }
      router.push("/login")
    } catch (err) {
      console.log('Error check Authentication', err)
      router.push("/login")
    }
  }