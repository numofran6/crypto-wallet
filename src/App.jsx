import { Home } from './views';
import { MainNavigation, Navbar } from './shared/components';

const App = () => {
	return (
		<>
			<Navbar />

			<Home />

			<MainNavigation />
		</>
	);
};

export default App;
