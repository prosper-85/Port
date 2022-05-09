import "./menu.scss";

export default function Menu ( { menuOpen, setMenuOpen } )
{
  return (
    <div className={"menu " + ( menuOpen && "active" )}>
      <ul>
        <li onClick={() => setMenuOpen( false )}>
          <a href="#intro">Home</a>
        </li>
        <hr />
        <li onClick={() => setMenuOpen( false )}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <hr />
        <li onClick={() => setMenuOpen( false )}>
          <a href="#works">Works</a>
        </li>
        <hr />
        <li onClick={() => setMenuOpen( false )}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <hr />
        <li onClick={() => setMenuOpen( false )}>
          <a href="#contact">Contact</a>
        </li>
        <hr />
      </ul>
    </div>
  );
}
