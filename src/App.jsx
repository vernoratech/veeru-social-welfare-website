import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Preloader from "./components/common/Preloader";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import WhoWeSupport from "./pages/WhoWeSupport";
import Volunteer from "./pages/Volunteer";
import GetHelp from "./pages/GetHelp";

/**
 * Main App Component
 * Routes for all VEERU pages with consistent Layout wrapper
 */
function App() {
  return (
    <>
      <Preloader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="our-work" element={<OurWork />} />
          <Route path="who-we-support" element={<WhoWeSupport />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="get-help" element={<GetHelp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
