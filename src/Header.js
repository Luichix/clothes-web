import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header (){
    return (
    <header className="header-container">
        <h1 className='store-name'>Vero <i className='store-name-i'>Store</i></h1>
        <nav className="nav-header">
            <a className="a-nav" href=".app">NUEVO</a>
            <a className="a-nav" href=".app">DESCUENTOS</a>
            <a className="a-nav" href=".app">ROPA</a>
            <a className="a-nav" href=".app">ZAPATOS</a>
            <a className="a-nav" href=".app">ACCESORIOS</a>
            <a className="a-nav" href=".app">BELLEZA</a>
        </nav>
        <i className='icon-header'><FontAwesomeIcon icon={faBars} size="lg"/></i>
  </header>);
};

export default Header;