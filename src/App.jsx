import "./App.css";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<ProjectsSection />
		</>
	);
}

export default App;
