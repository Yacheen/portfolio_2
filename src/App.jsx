import "./App.css";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";

function App() {
	return (
		<div className="App">
			<Navbar />
			<HeroSection />
			<ProjectsSection />
		</div>
	);
}

export default App;
