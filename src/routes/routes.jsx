import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Home from "../components/Home/Home";
import About from "../components/About";
import Blog from "../components/Blog"

const meraRouterHai = createBrowserRouter([
    {
        path : "",
        element : <App />,
        children: [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "about",
                element : <About />
            },
            {
                path : "blog",
                element : <Blog />
            }
        ]
    },
]);

export const Routes = () => {
    return <RouterProvider router={meraRouterHai} />
}

