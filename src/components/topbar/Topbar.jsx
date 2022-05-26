import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import { useGlobalContext } from "../../context/Context";

export default function Topbar ( { menuOpen, setMenuOpen } )
{

  const { light, dark } = useGlobalContext()
  return (
    <div className={"topbar " + ( menuOpen && "active" )}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Prosper.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+2349034023685</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>oluwatobi3685@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="mood-wrapper">
            <div
              className="colorOption" onClick={light}
            ></div>
            <div
              className="colorOption" onClick={dark}
            ></div>
          </div>
          <div className="hambuger-wrapper">
            <div className="hamburger" onClick={() => setMenuOpen( !menuOpen )}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
