import { Outlet, useLocation } from "react-router-dom";
import Data from "../components/Data";

const App: React.FC = () => {

	const location = useLocation();

	console.log("Location ", location)

	return (
		<>
			<div>
				<h1>hellos</h1>
				<Data text="Soy un texto en una prop" />
				<Outlet />
			</div>
		</>
	)
};

export default App;
