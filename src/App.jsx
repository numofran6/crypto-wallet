import { Route, Routes } from 'react-router-dom';
import { MainNav } from './shared/components/main-nav/MainNav';
import { Home, Map, Notifications, Settings } from './views';
import { Chart, Navbar } from './shared/components';

const App = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<Chart />} />
					<Route path="/day" element={<Chart />} />
					<Route path="/week" element={<Chart />} />
					<Route path="/month" element={<Chart />} />
					<Route path="/year" element={<Chart />} />
				</Route>

				<Route path="/map" element={<Map />} />
				<Route path="/notifications" element={<Notifications />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>

			<MainNav />
		</>
	);
};

export default App;
