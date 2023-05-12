import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import BookingNow from "./components/BookingNow/BookingNow";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { Toaster } from "react-hot-toast";
import CarouselData from "./components/CarouselData/CarouselData";
import OffersAndDeals from "./components/OffersAndDeals/OffersAndDeals";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch(
              "https://bangoli-bruse-kholifa-server.vercel.app/allApis/"
            );
          },
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: async () => {
            return fetch(
              "https://bangoli-bruse-kholifa-server.vercel.app/allApis/"
            );
          },
          element: <Home></Home>,
        },
        {
          path: "/branches",
          element: <CarouselData></CarouselData>,
        },
        {
          path: "/offers",
          element: <OffersAndDeals></OffersAndDeals>,
        },
        { path: "/login", element: <Login></Login> },
        { path: "/signUp", element: <SignUp></SignUp> },

        {
          path: "/bookingNow/:bookingNowId",
          loader: async ({ params }) => {
            // return fetch(`http://localhost:5000/${params.bookingNowId}`);
            return fetch(
              `http://localhost:5000/allApis/${params.bookingNowId}`
            );
          },
          element: (
            <PrivateRoutes>
              <BookingNow></BookingNow>
            </PrivateRoutes>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
