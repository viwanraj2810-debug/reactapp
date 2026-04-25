import { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios'


const FetchData = () => {
    console.log(useContext(UserContext))
    const {setUser} = useContext(UserContext)
    const getUser = async ()=>{
        try{
           const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
           console.log(response.data)
           const userData = response.data
           setUser(userData)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        getUser()
    },[])
  return (
  <>
  </>
  );
}

export default FetchData;
