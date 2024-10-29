import DetailUser from "../pages/detailUser";
import Dashboard from "../pages/dashboard";
import FollowingPost from "../pages/followingPost";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";


export const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/followingpost',
        element: <FollowingPost/>
    },
    {
        path: '/detailuser/:userId',
        element: <DetailUser/>
    },

]