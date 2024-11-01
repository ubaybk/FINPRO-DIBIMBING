import DetailUser from "../pages/detailUser";
import Dashboard from "../pages/dashboard";
import FollowingPost from "../pages/followingPost";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import ExplorePost from "../pages/explorePost";
import ProtectedRoute from "./protectedRoute";
import MyFollowing from "../pages/myfollowing/myFollowing";
import MyFollowers from "../pages/myFollowers";


export const routes = [
  {
    path: "/",
    element:  <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/followingpost",
    element: (
      <ProtectedRoute>
        <FollowingPost />
      </ProtectedRoute>
    ),
  },
  {
    path: "/detailuser/:userId",
    element: (
      <ProtectedRoute>
        <DetailUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "/explorepost",
    element: (
        <ProtectedRoute>
            <ExplorePost/>
        </ProtectedRoute>
    )
  },
  {
    path: "/myfollowing",
    element: (
        <ProtectedRoute>
            <MyFollowing/>
        </ProtectedRoute>
    )
  },
  {
    path: "/myfollowers",
    element: (
        <ProtectedRoute>
            <MyFollowers/>
        </ProtectedRoute>
    )
  },
];
