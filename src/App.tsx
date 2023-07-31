import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./shared/redux/store";
import routes from "./shared/routes";

const App: React.FC = () => {

	return (
		<Provider store={ store }>
			<RouterProvider router={ routes } />
		</Provider>
	);
};

export default App;
