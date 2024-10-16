import { useState, useEffect } from "react";
import { Outlet, useNavigation, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const HomeLayout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const isPageLoading = navigation.state === "loading";

  const hideFooterRoutes = ["/orders", "/usersOrders", "/checkout", "/cart"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  const isSingleProductPage = /^\/products\/\w+/.test(location.pathname);

  const [showPreloader, setShowPreloader] = useState(true);

  // Simulate a loading delay before rendering the content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 10000); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showPreloader) {
    return <Preloader />;
  }

  return (
    <div>
      <NavBar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-elements bg-stone-50 ">
          <Outlet />
        </section>
      )}
      {!shouldHideFooter && !isSingleProductPage && <Footer />}
    </div>
  );
};

export default HomeLayout;
