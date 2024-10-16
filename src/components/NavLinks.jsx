import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const links = [
  { id: 7, url: "usersOrders", text: "UsersOrders" },
  { id: 2, url: "/", text: "Home" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "Checkout" },
  { id: 6, url: "orders", text: "orders" },
  { id: 1, url: "about", text: "aboutUs" },
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  const admin = user?.role === "admin";
  // console.log(admin);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "checkout" || url === "orders") & !user) return null;
        if ((url === "usersOrders") & !admin) return null;
        return (
          <li key={id}>
            <NavLink className="capitalize md:text-xl md:w-52" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
