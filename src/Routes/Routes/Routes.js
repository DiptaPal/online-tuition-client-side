import AllCourses from "../../Pages/AllCourses/AllCourses";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/Login/Login/Login";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layouts/Main");
const { default: Home } = require("../../Pages/Home/Main/Home");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async() =>{
                   return fetch('https://b610-lerning-platform-server-side-dipta-pal.vercel.app/courses')
                }
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: async() =>{
                   return fetch('https://b610-lerning-platform-server-side-dipta-pal.vercel.app/courses')
                }
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/courses',
                element: <AllCourses></AllCourses>,
                loader: async() =>{
                    return fetch('https://b610-lerning-platform-server-side-dipta-pal.vercel.app/courses')
                }
            },
            {
                path: '/course_detail/:id',
                element: <CourseDetails></CourseDetails>,
                loader: async ({params}) =>{
                    return fetch(`https://b610-lerning-platform-server-side-dipta-pal.vercel.app/courses/${params.id}`)
                }
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: async ({params}) =>{
                    return fetch(`https://b610-lerning-platform-server-side-dipta-pal.vercel.app/courses/${params.id}`)
                }
            }
        ]
    }
])