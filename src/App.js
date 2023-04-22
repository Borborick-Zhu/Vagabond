import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";

// Pages
import GlobePage from './pages/GlobePage';

function App() {
  return (
	<Router>
		<Routes>
			<Route exact path="/" element={<GlobePage />} />
		</Routes>
	</Router>
  );
}

export default App;
