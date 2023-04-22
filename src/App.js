import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";

// Pages
import HomePage from './pages/HomePage';
import InterestsPage from './pages/InterestsPage';
import GlobePage from './pages/GlobePage';
import InfoPage from './pages/InfoPage';

function App() {
  return (
	<Router>
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route exact path="/interests" element={<InterestsPage />} />
			<Route exact path="/globe" element={<GlobePage />} />
			<Route exact path="/info" element={<InfoPage />} />
		</Routes>
	</Router>
  );
}

export default App;
