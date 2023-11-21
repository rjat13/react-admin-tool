import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Signin from "./pages/admin/signin";
import Dashboard from "./pages/admin/dashboard";
import AdminLayout from "./layouts/AdminLayout";
import Users from "./pages/admin/users";
import NotFound from "./pages/404";
import { AuthContext } from "./store/provider/AuthProvider";
import {useAuth} from './hooks/useAuth'
import AddUser from "./pages/admin/users/AddUser";
import Slider from "./pages/slider";
import Tables from "./pages/tables";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import FormValidation from "./pages/ui/formValidation";


const Routes = () => {
	const { isLoggedInUser } = useAuth(AuthContext);
	console.log("abc", isLoggedInUser)
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
					element: <Signin />,
					// loader: () => isLoggedInUser(),
				},{
					path: '*',
					element: <AdminLayout />,
					loader: () => isLoggedInUser(),
					children: [
						{
							path: 'dashboard',
							element: <Dashboard />
						},
						{
							path: 'users',
							element: <Users />,
							children: [
								{
									path:'add-user',
									element: <AddUser />
								}
							]
						},
						{
							path: 'slider',
							element: <Slider />
						},
						{
							path: 'tables',
							element: <Tables />
						},
						{
							path: 'ui',
							children: [
								{
									path: 'buttons',
									element: <Buttons />
								},
								{
									path: 'form-validation',
									element: <FormValidation />
								},
								{
									path: 'modals',
									element: <Modals />
								}
							]
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
