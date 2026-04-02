import React from 'react';

const Product = ({username}) => {
  return (
    <div>
      <div className="h-40 w-32 bg-amber-500">
       <img src='' alt="" className="h-15 w-10"/> <span>Hello! {username} </span>
</div>
      <div>

      </div>
    </div>
  );
}

export default Product;
