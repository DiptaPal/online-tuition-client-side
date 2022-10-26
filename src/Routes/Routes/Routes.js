import AllCourses from "../../Pages/AllCourses/AllCourses";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

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
            }
        ]
    }
])