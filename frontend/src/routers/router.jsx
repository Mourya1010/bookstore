import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
//single page app s capital letter 
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
//DashBoardLayout
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";
import UserDashboard from "../pages/dashboard/users/UserDashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/orders",
            element: <PrivateRoute><OrderPage/></PrivateRoute>
        },
        {
            path: "/about",
            element: <div>About</div>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/cart",
          element: <CartPage/>
        },
        {
          path: "/checkout",
          element: <PrivateRoute><CheckoutPage/></PrivateRoute>
        },
        {
          path: "/books/:id",
          element: <SingleBook/>
        },
        {
          path: "/user-dashboard",
          element: <PrivateRoute><UserDashboard/></PrivateRoute>
        }
        
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    },
    {
      path: "/dashboard",
      element: <AdminRoute>
        <DashboardLayout/>
      </AdminRoute>,
      children:[
        {
          path: "",
          element: <AdminRoute><Dashboard/></AdminRoute>
        },
        {
          path: "add-new-book",
          element: <AdminRoute>
            <AddBook/>
          </AdminRoute>
        },
        {
          path: "edit-book/:id",
          element: <AdminRoute>
            <UpdateBook/>
          </AdminRoute>
        },
        {
          path: "manage-books",
          element: <AdminRoute>
            <ManageBooks/>
          </AdminRoute>
        }
      ]
    }
  ]);

  export default router;

// src/router/router.jsx
// import { createBrowserRouter } from 'react-router-dom';
// import App from '../App';
// import Home from '../pages/home/Home';
// import Login from '../components/Login';
// import Register from '../components/Register';
// import CartPage from '../pages/books/CartPage';
// import CheckoutPage from '../pages/books/CheckoutPage';
// import SingleBook from '../pages/books/SingleBook';
// import PrivateRoute from './PrivateRoute';
// import AdminRoute from './AdminRoute';
// import DashboardLayout from '../layout/DashboardLayout';
// import Dashboard from '../pages/admin/Dashboard';
// import OrderPage from '../pages/books/OrderPage';
// import PageNotFound from '../components/PageNotFound'; // Create this

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { path: '', element: <Home /> },
//       { path: 'login', element: <Login /> },
//       { path: 'register', element: <Register /> },
//       { path: 'book/:id', element: <SingleBook /> },

//       {
//         path: 'cart',
//         element: (
//           <PrivateRoute>
//             <CartPage />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: 'checkout',
//         element: (
//           <PrivateRoute>
//             <CheckoutPage />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: 'orders',
//         element: (
//           <PrivateRoute>
//             <OrderPage />
//           </PrivateRoute>
//         ),
//       },
//     ],
//   },
//   {
//     path: '/admin',
//     element: (
//       <AdminRoute>
//         <DashboardLayout />
//       </AdminRoute>
//     ),
//     children: [
//       { index: true, element: <Dashboard /> },
//       // Add more admin pages here
//     ],
//   },
//   {
//     path: '*',
//     element: <PageNotFound />,
//   },
// ]);

// export default router;
