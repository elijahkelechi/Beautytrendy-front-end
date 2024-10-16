import React, { useEffect, useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import FiltersForm from "./FiltersForm";

const Filters = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [display, setDisplay] = useState("hidden");
  //This handle the toggling of taiwind classes for the dispaly of filters form
  const handleDisplay = () => {
    if (display === "hidden") {
      setDisplay("");
    } else {
      setDisplay("hidden");
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`filters ml-2 flex bg-neutral md:btn  md:animate-none p-1 rounded-sm ${
          isSticky
            ? "fixed top-16 mt-1 mr-20 cursor-pointer md:hidden"
            : "relative mr-24 cursor-pointer md:hidden"
        }`}
        onClick={() => handleDisplay()}
      >
        <div className="flex btn btn-sm">
          <BsFilterLeft className="text-rose-900  font-bold text-3xl" />
          <span className="text-rose-500">Filters</span>
        </div>
      </div>
      <div className="md:fixed mt-4">
        <div
          className={`bg-white px-2 ${display} md:block md:mr-0 md:ml-8 w-full md:mt-0 `}
        >
          <FiltersForm />
        </div>
      </div>
    </div>
  );
};

export default Filters;
