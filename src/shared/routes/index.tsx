import { Main, Info, InfoDetail } from "@/modules/main/pages";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";


export default createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Main />}
		>
			<Route
				path="info"
				element={<Info />}
			>
				<Route
					path=":id"
					element={<InfoDetail />}
				/>
			</Route>
		</Route>
	)
)