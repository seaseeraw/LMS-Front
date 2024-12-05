import { Route, Routes } from "react-router-dom";

import Default from "../components/layout/Default";

import { UserLayout } from "../components/layout/UserLayout";

import {
  Admins,
  Books,
  Dashboard,
  BorrowHistory,
  Reviews,
  Users,
  Profile,
  Login,
  Signup,
  Home,
} from "../pages";


const publicRouers = [
  {
    element: <Home />,
    index: true,
  },
  {
    path: "signup",
    element: <Signup />,
    index: true,
  },
  {
    path: "login",
    element: <Login />,
    index: true,
  },
];
const privateRouers = [
  {
    element: <Dashboard />,
    index: true,
  },
  {
    path: "books",
    element: <Books />,
  },
  {
    path: "borrow-history",
    element: <BorrowHistory />,
  },
  {
    path: "admins",
    // element: <Admins />,
    element: <Admins />,
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "reviews",
    element: <Reviews />,
  },
];

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        {publicRouers.map((item) => (
          <Route key={item.path + 1} {...item} />
        ))}
      </Route>
      <Route path="/user" element={<UserLayout />}>
        {privateRouers.map((item) => (
          <Route key={item.path + 1} {...item} />
        ))}
      </Route>
    </Routes>
  );
};
