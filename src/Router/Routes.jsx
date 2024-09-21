import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Page_Home/Home/Home";
import Error from "../Pages/Page_Error/Error";
import AppliedJobs from "../Pages/Page_AppliedJobs/AppliedJobs";
import Blogs from "../Pages/Page_Blogs/Blogs";
import Root from "../Layout/Root";
import AllJobs from "../Pages/Page_AllJobs/AllJobs";
import JobDetails from "../Pages/Page_AllJobs/JobDetials/JobDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/jobs",
                loader: async () => fetch("allJobs.json").then(res => res.json()),
                element: <AllJobs />
            },
            {
                path: "/jobs/:id",
                loader: async () => fetch("allJobs.json").then(res => res.json()),
                element: <JobDetails />
            },
            {
                path: "/appliedJobs",
                loader: async () => fetch("allJobs.json").then(res => res.json()),
                element: <AppliedJobs />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
        ]
    }
]);

export default router;
