import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
	return <>
		<h1>Main</h1>
		<Outlet />
	</>
};

export default Main;