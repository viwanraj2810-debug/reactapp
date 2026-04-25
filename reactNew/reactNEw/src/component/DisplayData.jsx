import { useContext } from "react";
import UserContext from "../context/UserContext";

const DisplayData = () => {
  const { user } = useContext(UserContext);
  
  if(!user) return <h1>Loading</h1>
  
  return (
    <>
      {user.map((item,index)=> (

        <div key={index} className="bg-amber-50 h-16 w-12">
          <img src={item.download_url} alt="" />
          <h1>{item.author}</h1>
        </div>

      ))
      }
    </>
  );
};

export default DisplayData;
