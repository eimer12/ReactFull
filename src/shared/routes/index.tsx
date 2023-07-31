import HomeRoutes from "@/modules/home/routes";
import { Main } from "@/modules/main/pages";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
	{
		path: "/home",
		element: <Main />,
		children: [
			HomeRoutes
		]
	}
])