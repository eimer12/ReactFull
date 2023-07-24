import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routes from "./shared/routes";
import { store } from "./shared/redux/store";

const App: React.FC = () => {
	return (
		<Provider store={ store }>
			<RouterProvider router={ routes } />
		</Provider>
	);
};

export default App;
