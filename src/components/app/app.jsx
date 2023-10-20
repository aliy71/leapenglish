import { Box } from "@chakra-ui/react";
import { Footer, Home, Navbar } from "../";
import VideoPlayer from "../video-player/video-player";
import Lessons from "../lessons/lessons";


const App = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <header>
                <Home />
                <VideoPlayer />
                <Lessons />
            </header>
            <Footer />
        </>
    );
}

export default App;