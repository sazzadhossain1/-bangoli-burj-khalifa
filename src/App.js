import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import BookingNow from "./components/BookingNow/BookingNow";
import PrivateRoutes from "./Routes/PrivateRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("http://localhost:5000/burj-kholifa/");
          },
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: async () => {
            return fetch("http://localhost:5000/burj-kholifa/");
          },
          element: <Home></Home>,
        },
        { path: "/login", element: <Login></Login> },
        { path: "/signUp", element: <SignUp></SignUp> },

        {
          path: "/bookingNow/:bookingNowId",
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/${params.bookingNowId}/`);
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
    </div>
  );
}

export default App;
