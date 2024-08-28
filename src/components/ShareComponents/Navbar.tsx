import { Moon, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const Header = () => {
  const products = useAppSelector((store) => store.cart.products);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-gradient-to-r from-blue-200  to-gray-400 rounded-sm px-3">
      <nav className="container mx-auto flex items-center justify-between space-x-10 py-4 ">
        <Link to={"/"}>
          <p className="text-4xl rounded-lg  text-green-200">logo </p>
          <div className="text-4xl  text-green-600">logo one</div>
        </Link>

        <div className="hidden md:flex items-center space-x-5">
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                className="bg-gradient-to-r from-emerald-200  to-blue-700 rounded-lg shadow-xl font-semibold text-white text-xl backdrop-blur-[2px] p-2 transition-transform hover:scale-105 hover:shadow-2xl  inline-block hover:bg-green-700  duration-300  "
                to={"/products"}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="bg-gradient-to-r from-emerald-200  to-blue-700 rounded-lg shadow-xl font-semibold text-white text-xl backdrop-blur-[2px] p-2 transition-transform transform hover:scale-105 hover:shadow-2xl  inline-block "
                to={"/about"}
              >
                About
              </Link>
            </li>
            <li className="relative">
              <Link
                className="bg-gradient-to-r from-emerald-200  to-blue-700 rounded-lg shadow-xl font-semibold text-white text-xl backdrop-blur-[2px] py-2 px-4 transition-transform transform hover:scale-105 hover:shadow-2xl  inline-block "
                to={"/cart"}
              >
                <ShoppingCart size={28} />
              </Link>
              <span className="rounded-full absolute top-[-10px] left-[20px] bg-primary text-white text-center size-[25px]">
                {products.length}
              </span>
            </li>

            <li>
              <button
                // onClick={handleToggleTheme}
                className="bg-gradient-to-r from-blue-200  to-blue-400 rounded-lg shadow-xl font-semibold text-white text-xl backdrop-blur-[2px] py-2 px-4  transition-transform transform hover:scale-105 hover:shadow-2xl  inline-block "
              >
                <Moon size={28} />
              </button>
            </li>
            <li>
              <Link
                className="bg-gradient-to-r from-blue-200  to-blue-700 rounded-lg shadow-xl font-semibold text-white text-xl backdrop-blur-[2px] p-2 transition-transform transform hover:scale-105 hover:shadow-2xl  inline-block "
                to={"/login"}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-5 mt-4">
          <li>
            <Link
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to={"/products"}
              onClick={handleMenuToggle}
            >
              Products
            </Link>
          </li>
          <li>
            <a
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleMenuToggle}
            >
              About
            </a>
          </li>
          <li className="relative">
            <Link
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to={"/cart"}
              onClick={handleMenuToggle}
            >
              <ShoppingCart size={24} />
            </Link>
            <span className="rounded-full absolute top-[-10px] left-[20px] bg-primary text-white text-center size-[25px]">
              2
            </span>
          </li>
          <li>
            <button
              // onClick={handleToggleTheme}
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              <Moon size={24} />
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
