import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./modules/home/home.view";

interface AppProps {}

const App = ({}: AppProps) => {
	return (
		<>
			<Switch>
				<Route path="/" component={HomePage} />
			</Switch>
		</>
	);
};

export default App;
