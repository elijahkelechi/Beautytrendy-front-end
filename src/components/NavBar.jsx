import { BsCart3, BsPerson, BsSearch, BsList } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import NavLinks from "./NavLinks";
import NavPersonLinks from "./NavPersonLinks";
import SearchInputFilter from "./SearchInputFilter";
import MobileSearchInputFilter from "./MobileSearchInputFilter";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isPersonOpen, setIsPersonOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  const toggleListDropdown = () => {
    setIsListOpen((prev) => !prev);
    setIsPersonOpen(false); // Close person dropdown if open
  };

  const togglePersonDropdown = () => {
    setIsPersonOpen((prev) => !prev);
    setIsListOpen(false); // Close list dropdown if open
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsListOpen(false);
        setIsPersonOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`bg-neutral w-full px-2 fixed align-elements z-50 transition-transform duration-300 ${
        isScrolled ? "md:-translate-y-full" : ""
      }`}
    >
      <div className={`navbar flex ${isScrolled ? "hidden md:flex" : "flex"}`}>
        {/* Logo Section */}
        <div className="navbar-start">
          <Link to="/">
            <img className="h-10 md:h-20" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Search Input Section */}
        <div className="navbar-center hidden md:flex">
          <SearchInputFilter />
          <Link className="btn btn-sm ml-2 rounded-full" to="/products">
            reset searches
            <AiOutlineReload />
          </Link>
        </div>

        {/* Icons Section */}
        <div className="navbar-end flex items-center gap-2 md:gap-4">
          <div className="navbar-end flex items-center gap-4">
            <div className="dropdown group relative">
              <label
                tabIndex={0}
                className="cursor-pointer"
                onClick={toggleListDropdown}
              >
                <BsList
                  size={20}
                  className="btn btn-primary btn-sm p-1 md:hover:text-white text-gray-50 md:mr-24 md:ml-8 md:bg-rose-100 size-10 md:rounded-full md:text-primary-content"
                />
              </label>
              <ul
                className={`absolute menu menu-md dropdown-content z-50 ${
                  isListOpen ? "block" : "hidden"
                } bg-stone-50 mt-2 p-2 rounded-md w-auto`}
              >
                <div className="absolute top-0 left-3 md:left-14 transform -translate-x-1/2 -translate-y-full">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-stone-50"></div>
                </div>
                {/* Dropdown Menu Items */}
                <NavLinks />
              </ul>
            </div>
          </div>
          <div className="dropdown group relative">
            <label
              tabIndex={0}
              className="cursor-pointer"
              onClick={togglePersonDropdown}
            >
              <BsPerson
                size={36}
                className="btn rounded-full bg-rose-200 md:bg-rose-400 btn-sm p-1 btn-primary text-gray-50 size-10 md:size-14 cursor-pointer md:mx-2"
              />
            </label>
            <ul
              className={`absolute menu menu-md dropdown-content z-50 ${
                isPersonOpen ? "block" : "hidden"
              } bg-stone-50 mt-1 p-2 rounded-md w-auto`}
            >
              <div className="absolute top-0 left-3 md:left-8 transform -translate-x-1/2 -translate-y-full">
                <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-stone-50"></div>
              </div>
              {/* Dropdown Menu Items */}
              <NavPersonLinks />
            </ul>
          </div>

          <div>
            <Link
              className="btn text-gray-50 btn-primary relative flex items-center"
              to="/cart"
            >
              <span className="badge badge-sm bg-info border-info text-primary-content absolute top-0 right-0 animate-bounce">
                {numItemsInCart}
              </span>
              <BsCart3
                size={24}
                className="cursor-pointer md:size-10 animate-bounce"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Small Screen Search Bar (visible on scroll) */}
      <div
        className={`navBar flex md:hidden align-elements transition-transform duration-300 ${
          isScrolled ? "fixed top-0 left-0 right-0 bg-neutral py-2" : ""
        }`}
      >
        <div className="navbar-center w-full flex items-center justify-between">
          <MobileSearchInputFilter />
          <Link className="btn btn-sm ml-2 rounded-full" to="/products">
            <AiOutlineReload />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
