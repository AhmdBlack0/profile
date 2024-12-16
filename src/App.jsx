import "./css/all.min.css";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// import "./css/App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
    </>
  );
}

export default App;
