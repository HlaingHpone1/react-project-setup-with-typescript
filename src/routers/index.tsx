import { useUserStore } from '../stores/useUserStore';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';
import { Navigate, Route, Routes } from 'react-router-dom';

const Router = () => {
	const { userData, logInUser } = useUserStore();

	const authRouteList = [
		{
			path: '/login',
			element: Login,
		},
		{
			path: '/register',
			element: Register,
		},
	];

	const routeList = [
		{
			path: '/',
			element: MainLayout,
			children: [
				{
					path: '/',
					element: Home,
					role: ['Admin', 'User'],
				},
				{
					path: '/product',
					element: Product,
					role: ['Admin', 'User'],
				},
			],
		},
		{
			name: 'Not Found',
			path: '*',
			element: NotFound,
		},
	];

	return (
		<>
			{logInUser ? (
				<Routes>
					{routeList.map((route, i) => (
						<Route
							key={i}
							path={route.path}
							element={<route.element />}
						>
							{route.children?.map((subRoute, j) =>
								userData &&
								subRoute.role.includes(userData.role) ? (
									<Route
										key={j}
										path={subRoute?.path}
										element={<subRoute.element />}
									/>
								) : null
							)}
						</Route>
					))}
				</Routes>
			) : (
				<Routes>
					{authRouteList.map((route, i) => (
						<Route
							key={i}
							path={route.path}
							element={<route.element />}
						/>
					))}
					<Route
						path="*"
						element={<Navigate to="/login" replace />}
					/>
				</Routes>
			)}
		</>
	);
};

export default Router;
