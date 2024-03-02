import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cart && cart.length > 0) {
      const total = cart.reduce((acc, curr) => acc + curr.price, 0);
      setTotalAmount(total);
    } else {
      setTotalAmount(0);
    }
  }, [cart]);

  return (
    <div className="mx-auto mt-20 max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        {/* Conditional rendering for cart content */}
        {cart && cart.length > 0 ? (
          <>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Shopping Cart
            </h1>
            <p className="mt-3 text-sm font-medium text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit
              praesentium incidunt.
            </p>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/3">
                {cart.map((product, productIndex) => (
                  <CartItem key={product.id} product={product} productIndex={productIndex} />
                ))}
              </div>
              <div className="w-full md:w-1/3 mt-8 md:mt-0">
                <section aria-labelledby="summary-heading" className="rounded-md bg-white">
                  <h1
                    id="summary-heading"
                    className="border-b border-gray-200 font-bold px-4 py-3 text-lg text-gray-900 sm:p-4"
                  >
                    Price Details
                  </h1>
                  <div className="px-2 py-4">
                    <dl className="space-y-1">
                      <div className="flex items-center justify-between">
                        <dt className="text-sm text-gray-800">Price ({cart.length} item)</dt>
                        <dd className="text-sm font-medium text-gray-900">${totalAmount}</dd>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <dt className="flex items-center text-sm text-gray-800">
                          <span>Discount</span>
                        </dt>
                        <dd className="text-sm font-medium text-green-700">- $0,000</dd>
                      </div>
                      <div className="flex items-center justify-between py-4">
                        <dt className="flex text-sm text-gray-800">
                          <span>Delivery Charges</span>
                        </dt>
                        <dd className="text-sm font-medium text-green-700">Free</dd>
                      </div>
                      <div className="flex items-center justify-between border-y border-dashed py-4">
                        <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                        <dd className="text-base font-medium text-gray-900">${totalAmount}</dd>
                      </div>
                    </dl>
                    <div className="px-2 pb-4 font-medium text-green-700">
                      You will save ${totalAmount} on this order
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </>
        ) : (
          // Render home button when cart is empty
          <div className="text-center flex justify-center  h-screen flex-col gap-3 mx-auto items-center  ">
            <p>No items in the cart. </p>
            <Link to="/" className=""><button
                
                className="rounded-sm bg-black px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus:outline-none focus-visible:ring focus-visible:ring-black"
              >
                Home
              </button></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;






