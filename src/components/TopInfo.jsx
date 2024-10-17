import { BsFillGeoAltFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopInfo = () => {
  const myuser = useSelector((state) => state.userState.user);

  const user = myuser?.role === "user";

  const admin = myuser?.role === "admin";

  return (
    <div className="w-full bg-blue-100 flex lg:py-6 md:py-4">
      <h1 className="flex items-center text-xs font-bold text-gray-700 space-x-2">
        {/* Icon with rose background */}
        <span className="flex items-center justify-center bg-lime-400 animate-pulse rounded-full p-1">
          <BsFillGeoAltFill className="text-green-900 animate-bounce text-lg" />
        </span>
        {/* Text */}
        <span className="tracking-wide md:text-lg lg:text-xl text-info">
          Fast Delivery
        </span>
        {user ? (
          <p className="capitalize md:text-lg">
            Hello{" "}
            <span className="capitalize text-lg bg-info text-gray-50 px-2 rounded-sm ">
              {myuser.name}
            </span>
            <span className="md:text-lg"> We love shopping with you</span>
          </p>
        ) : null}
        {admin ? (
          <p className="capitalize md:text-lg">
            Hello{" "}
            <span className="capitalize text-lg bg-info text-gray-50 px-2 rounded-sm ">
              {myuser.role}
            </span>
            <span className="md:text-lg">
              {" "}
              Check dont't forget to check active customers order
            </span>
          </p>
        ) : null}
      </h1>
    </div>
  );
};

export default TopInfo;
