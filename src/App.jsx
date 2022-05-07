import "./App.css";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
import {Contact} from "./components/Contact";
function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<ProjectsSection />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
