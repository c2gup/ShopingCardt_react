import React from 'react';
import { MdDelete } from "react-icons/md";
import { remove } from "../redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-hot-toast';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleRemove = () => {
    dispatch(remove(product.id));
    toast.error("Item removed successfully");
    console.log('Removing item:', product.title);
  };

  return (
    <div className="mx-auto  max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <div aria-labelledby="cart-heading" className="rounded-lg bg-white">
          <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
          </h2>
          <div className="flex py-6">
            <div className="flex-shrink-0">
              <img
                src={product.image}
                alt={product.title}
                className="h-24 w-24 sm:h-38 sm:w-38 rounded-md object-contain object-center transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-black">
                      {product.title}
                    </h3>
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-600 text-3xl focus:outline-none"
                      onClick={handleRemove}
                    >
                      <MdDelete />
                    </button>
                  </div>
                  <div className="mt-1 flex text-sm">
                    <p className="text-gray-500">Category: {product.category}</p>
                  </div>
                  <div className="mt-1 flex items-end">
                    <p className="text-xs font-medium text-gray-500 line-through">
                      Original Price: ${product.price}
                    </p>
                    <p className="text-sm font-medium text-gray-900 ml-2">
                      Price: ${product.price}
                    </p>
                    <p className="text-sm font-medium text-green-500 ml-2">
                      Discount: {product.discount}
                    </p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <hr className="border-black w-[50%] border-solid border-t-2" /> {/* Horizontal line */}
        </div>
      </div>
    </div>
  );
};

export default CartItem;




