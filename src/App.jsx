import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Admin,
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  UsersOrders,
  Products,
  Register,
  SingleProduct,
} from "./pages";
import ErrorElement from "./components/ErrorElement";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singlePageLoader } from "./pages/SingleProduct";
import { loader as productPageLoader } from "./pages/Products";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
// import { action as checkoutAction } from "./components/CheckoutForm";

import { loader as checkoutLoader } from "./pages/Checkout";

import { Email } from "./pages/ForgottenPassword/Email";
import { Token } from "./pages/ForgottenPassword/Token";
import { NewPassword } from "./pages/ForgottenPassword/NewPassword";

import { store } from "./store";

import ProtectedRoute from "./AdminProtection/ProtectedRoute";
const user = "admin";

//react query enable fast reloading after firet load within the satle time
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      {
        path: "products",
        element: <Products />,
        loader: productPageLoader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singlePageLoader(queryClient),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        // action: checkoutAction(store),
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "usersOrders",
        element: <UsersOrders />,
      },
      {
        path: "admin",
        element: (
          <ProtectedRoute user={user}>
            <Admin />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
  {
    path: "/email",
    element: <Email />,
    errorElement: <Error />,
  },
  {
    path: "/token",
    element: <Token />,
    errorElement: <Error />,
  },
  {
    path: "/newPassword",
    element: <NewPassword />,
    errorElement: <Error />,
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
