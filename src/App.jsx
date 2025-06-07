import Navbar from "./components/sections/NavBar.jsx";
import Hero from "./components/sections/Hero.jsx";
import Footer from "./components/sections/Footer.jsx";
import Reasons from "./components/sections/Reasons.jsx";
import Persona from "./components/sections/Persona.jsx";
import Sighting from "./components/sections/Sighting.jsx";
import Goal from "./components/sections/Goal.jsx";
import Tickets from "./components/sections/Tickets.jsx";

function App() {
    return (
        <>
            <header>
                <Navbar />
                <Hero />    
            </header>
            <main>
                <Reasons />
                <Persona />
                <Sighting />
                <Goal />
                <Tickets />
            </main>
            <Footer />
        </>
    );
}

export default App