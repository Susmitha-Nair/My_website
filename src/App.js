import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services"
import Experience from "./components/Experience/Experience"
import Publications from "./components/Publications/Publications";

import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Publications/>
    </div>
  );
}

export default App;
