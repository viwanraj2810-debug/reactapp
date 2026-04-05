import React from 'react';

const Product = (props) => {
  const data = Array.isArray(props.data) ? props.data : []
  return (
 <>
  <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,3fr))] gap-6 p-4'> 

    {data.map((item, index) => (
      <div 
      key={index}
       
        className='bg-emerald-800 h-52 rounded-md flex flex-col items-center p-3'
      >
        <img 
          className="rounded-full h-20 w-20 object-cover" 
          src={item.download_url} 
          alt="" 
        />
        <h1 className='font-semibold text-xl text-fuchsia-50 mt-2 text-center'>
          {item.author}
        </h1>
      </div>
    ))}

  </div>
</>
  );
}

export default Product;
