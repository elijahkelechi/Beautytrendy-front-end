import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

const links = [
  { id: 1, url: "/login", text: "login" },
  { id: 2, url: "/register", text: "create account" },
];

const NavPersonLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    //clearing cookies
    // document.cookie =
    //   "myToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };

  return (
    <>
      {user ? (
        <div className="flex-col">
          <p className="text-sm md:text-xl">Welcome {user.name}</p>
          <button
            onClick={handleLogout}
            className="btn btn-primary btn-sm md:btn-md text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <ul className="grid gap-2">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <NavLink
                  className="capitalize text-sm md:text-sm md:w-28 btn btn-primary text-white"
                  to={url}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default NavPersonLinks;
