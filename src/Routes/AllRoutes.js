import { lazy } from "react";
import fakeDelay from "../Shared/HelperMethods/FakeDelay";

const delayTime = 2000;

const routes = [
  {
    path: "/dashboard",
    component: lazy(() =>
     import("../Pages/AdminPages/DashBoard")
    ),
    exact: true,
    role: [1, 3, 4, 5],
  },
  {
    path: "/users",
    component: lazy(() =>
     import("../Pages/AdminPages/Users")
    ),
    exact: true,
    role: [1, 3, 4, 5],
  },
  {
    path: "/posts",
    component: lazy(() =>
      import("../Pages/AdminPages/Posts")
    ),
    exact: true,
    role: [1, 3, 4, 5],
  },
  {
    path: "/",
    component: lazy(() => import("../Pages/Auth/Login")),
    ispublic: true,
    exact: true,
  },
  // { path: '/*', component: Error404, role: [1, 3, 4, 5] }
];

export default routes;
