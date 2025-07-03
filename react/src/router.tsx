import {createBrowserRouter} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import Home from "./pages/Home.tsx";
import TaskPage from "./pages/TaskPage.tsx";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "/", element: <LoginPage/>},
            {path: "/login", element: <LoginPage/>},
            {path: "/signup", element: <RegisterPage/>},
            {path: "/task", element: <TaskPage/>},
            {path: "/Home", element: <Home/>},
        ]



    }





])


export default router;
