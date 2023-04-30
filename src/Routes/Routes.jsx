import {Navigate, createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home/Home';
import Category from '../Pages/Home/Category/Category';
import NewsLayout from '../Layout/NewsLayout';
import News from '../Pages/News/News';
import AddCategory from '../Pages/Home/Category/AddCategory';
import LoginLayout from '../Layout/LoginLayout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Navigate to="/category/0" />,
      },
    ],
  },
  {
    path: "category",
    element: <Main />,
    children: [
      // {
      //   path: "/",
      //   element: <Category />,
      //   loader: () => fetch("http://localhost:5000/news"),
      // },
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "add-category",
        element: <AddCategory />,
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <PrivateRoute ><News /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);




export default router;