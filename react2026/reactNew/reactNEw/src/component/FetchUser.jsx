import React, { useContext }  from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';
const FetchUser = async () => {
   const {setUser} = useContext(UserContext)
   const userData = await axios("https://picsum.photos/v2/list?page=2&limit=10")
   const Response = userData.JSON()
   console.log(Response)
  return (
   <>
   
   </>
  );
}

export default FetchUser;
