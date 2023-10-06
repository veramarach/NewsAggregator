import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import DetailedPage from "../Pages/DetailedPage";
import HeadlinePage from "../Pages/HeadlinePage";

const Index = createBrowserRouter([
    {
        path:"/",
        element:<HeadlinePage/>
    },

    {
         path:"/homepage/",
         element:<HomePage/>
    },

    {
        path:"/datailed/:i",
        element:<DetailedPage/>
    }

])
export default Index