import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Signin from "./pages/admin/signin";
import Dashboard from "./pages/admin/dashboard";
import AdminLayout from "./layouts/AdminLayout";
import Users from "./pages/admin/users";
import NotFound from "./pages/404";

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />
		},{
			path: '/about',
			element: <About />
		},{
			path: '/admin',
			children: [
				{
					path: '',
					element: <Signin />
				},{
					path: '*',
					element: <AdminLayout />,
					children: [
						{
							path: 'dashboard',
							element: <Dashboard />
						},
						{
							path: 'users',
							element: <Users />
						},
						{
							path: "*",
							element: <NotFound />,
						},
					]
				}
			]
		},
		{
			path: "*",
			element: <NotFound />,
		},
	])
  return <RouterProvider router={router} />;
};

export default Routes;
