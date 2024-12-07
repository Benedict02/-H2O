import Navbar from "./components/NavbarMUI";
import ColorPalette from "./components/ColorPalette";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";

function App() {
    return (
        <ParallaxProvider scrollAxis="vertical">
            <ColorPalette>
                <Navbar />
            </ColorPalette>
        </ParallaxProvider>
    );
}

export default App;
