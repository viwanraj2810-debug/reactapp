import React, { useState } from 'react';
import Form from './Form';
import Product from './Product';

const App = () => {
 const [user = [], setUser = []] = useState()
  return (
    <div className='bg-zinc-900 w-full h-screen flex justify-start flex-col'>
      
      <div className='p-10 '>
         <Form users= {{user,setUser}} />
        </div> 

        <div>
        <Product props = {{user}}/>

        </div>
    </div>
  );
}

export default App;
