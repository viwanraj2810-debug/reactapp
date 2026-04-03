import React, { useState } from 'react';
import Form from './Form';
import Product from './Product';

const App = () => {
 const [userName, setUserName] = useState("")
 const [profile, setProfile] = useState("")
  return (
    <div className='bg-zinc-900 w-full h-screen flex justify-start flex-col'>
      
      <div className='p-10 '>
         <Form props= {{setProfile, setUserName}} />
        </div> 

        <div>
        <Product props = {{userName, profile}}/>

        </div>
    </div>
  );
}

export default App;
