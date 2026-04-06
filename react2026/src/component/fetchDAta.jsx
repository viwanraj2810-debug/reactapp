
import axios from 'axios'
import { useEffect } from 'react'

const FetchDAta = (props) => {
   
    const getData = async () => {

        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=20')
        console.log(response)
        props.setData(response.data)
 
    }

   useEffect(()=> {
    getData()
   }, [])
  return (
    <>
    
    </>
  );
}

export default FetchDAta;
