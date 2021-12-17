import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

function App() {
  return (
    <>
      <Navbar className=""/>
      <NavbarMobile />
      <LandingPage />
    </>
  );
}

export default App;
