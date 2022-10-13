import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidenav from "./Components/Sidenav";
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Configurator from "./Pages/Configurator";
import Effeciency from "./Pages/Effeciency";
import Emissions from "./Pages/Emissions";
import Finance from "./Pages/Finance";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/configurator" element={<Configurator />} />
          <Route path="/emissions" element={<Emissions />} />
          <Route path="/effeciency" element={<Effeciency />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
