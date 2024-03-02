import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-white">
          <div>
            <span className="font-bold text-2xl">NewSP</span>
          </div>
        </NavLink>
        <div className="flex items-center">
          <NavLink to="/" className="text-white ml-4">
            <p className="text-xl">Home</p>
          </NavLink>
          <NavLink to="/cart" className="ml-4 flex items-center text-white relative">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {cart.length}
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




