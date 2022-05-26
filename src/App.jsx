import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import { useGlobalContext } from "./context/Context";

function App ()
{
  const { darkMode } = useGlobalContext()
  console.log( darkMode )
  const [ menuOpen, setMenuOpen ] = useState( false )
  return (
    <div className={`${ darkMode ? 'app dark' : 'app' }`}>
      <Topbar className='top' menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
