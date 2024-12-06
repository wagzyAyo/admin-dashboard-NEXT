import axios from "axios"

export const getData = async (endPoint, stateFunction)=>{
    try {
      const response = await axios.get(endPoint,{withCredentials: true})
      stateFunction(response.data)
    } catch (err) {
      console.log("Error getting data",err)
    }
  }

  export const checkAuth = async ()=>{
    
    try {
      const response = await axios.get('/api/check-auth', {withCredentials: true})
      if(response.status == 200){
        const data = response.data;
        console.log('User Authenticated', data.user)
        return true
      }
      return false
    } catch (err) {
      console.log('Error check Authentication', err)
      return false
    }
  }