import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Login from "../pages/login";


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
]