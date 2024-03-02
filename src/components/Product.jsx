import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from 'react-hot-toast';

const Product = ({ post }) => {
  const truncatedTitle =
    post.title.length > 50 ? post.title.substring(0, 30) + "..." : post.title;

  const truncatedDescription =
    post.description.length > 150
      ? post.description.substring(0, 100) + "..."
      : post.description;

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state) || {};

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added successfully");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed successfully");
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"> {/* Responsive width */}
      <div className="rounded-md border flex flex-col h-full">
        <img
          src={post.image}
          alt={post.title}
          className="h-48 w-full rounded-t-md object-contain transition duration-300 ease-in-out hover:scale-110"
        />
        <div className="flex-grow p-4 flex flex-col justify-between">
          <div>
            <div className="text-lg font-semibold">{truncatedTitle}</div>
            <p className="mt-2 text-sm text-gray-600">{truncatedDescription}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-900 font-bold text-lg">${post.price}</p>
            {cart && cart.some((p) => p.id === post.id) ? (
              <button
                onClick={removeFromCart}
                className="rounded-sm bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus:outline-none focus-visible:ring focus-visible:ring-red-600"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={addToCart}
                className="rounded-sm bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus:outline-none focus-visible:ring focus-visible:ring-green-600"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;




