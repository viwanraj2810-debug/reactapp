import React from "react";

const Product = ({props}) => {
  return (
    <div>
      <div className="bg-purple-400 h-28 w-20 rounded-md m-2 p-2 flex flex-col justify-center items-center">
        <img className="rounded-full h-10 w-10"
          src={`${props.profile}`}
          alt="image"
        />
        <h1>{props.userName}</h1>
      </div>
    </div>
  );
};

export default Product;
