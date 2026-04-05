import React, { useContext, useState } from 'react';
import Form from './Form';
import FetchDAta from './component/fetchDAta';
import Product from './Product';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './component/Nav'
import { DataContext } from './Context/ContextProvider';


const App = () => {
   const [data, setData] = useState([])
      
   console.log(data)
   const Data = useContext(DataContext);
   console.log(Data)
  return (
  
  <>
  <Nav/>
  <Routes>'
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/products' element={<Product/>} />
  </Routes>
  
    <div className='bg-zinc-900 w-full h-full flex justify-start flex-col gap-4'>
     
       <div className='gap-3 m-10 flex flex-col'>
         <FetchDAta setData= {setData}/>
        <div className=' grid grid-cols-3 grid-rows-3 gap-3'>

        <Product data = {data}/>
        </div>
       </div>
        <div>

        </div> 

    </div>
  
  </>
  );
}

export default App;
