import React from "react";

const Product = ({ props }) => {
  const userList = props.user;

  return (
    <div className="flex">
      {userList.map((user, index) => {
      return  <div
          key={index}
          className="bg-purple-400 h-28 w-20 rounded-md m-2 p-2 flex flex-col justify-center items-center"
        >
          <img
            className="rounded-full h-10 w-10"
            src={`${user.profile}`}
            alt="image"
          />
          <h1>{user.username}</h1>
        </div>;
      })}
    </div>
  );
};

export default Product;
