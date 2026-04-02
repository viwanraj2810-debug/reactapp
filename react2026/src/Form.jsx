import { useState } from "react"


const Form = ({objs}) => {
    const [inputName, setInputName]=useState("")
    
    
    
    const formHandler = (e)=>{
        e.preventDefault()
        //  const data = new FormData(e.target);
        console.log(inputName)
        objs.setUsername(inputName);
        setInputName('')
    }
    return (
        <>
      <div>
        

      <form onSubmit={formHandler} className='bg-blue-400 h-32 w-42 p-2 flex flex-col gap-2'>
        <input type="text" value={inputName} onChange={(e)=>setInputName(e.target.value)} placeholder='write something' className='bg-blue-100 w-32 rounded-md' name='name' />
        <button  type='submit' className='bg-blue-900 w-15 rounded-md'> Submit</button>
      </form>
      </div>
   
   </>
  );
}

export default Form;
