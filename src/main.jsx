import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Root.jsx";
import Home from "./Home";
import LoginForm from "./Login.jsx";
import RegisterForm from "./Register";
import AuthProvider from "./AuthProvider.jsx";
import SkillDetails from "./SkillDetails.jsx";
import Profile from "./Profile.jsx";
import Forget from "./Forget.jsx";
import PrivateRoute from "./PrivateRoute.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "register",
        element: <RegisterForm></RegisterForm>,
      },
      {
        path:'skillDetails/:id',
        element:<PrivateRoute><SkillDetails></SkillDetails></PrivateRoute>
      },
      {
        path:'profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'forget',
        element:<Forget></Forget>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
