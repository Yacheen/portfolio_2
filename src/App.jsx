import "./App.css";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<ProjectsSection />
			<Footer />
		</>
	);
}

export default App;
