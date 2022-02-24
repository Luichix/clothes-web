import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavButton = ({text}) =>{
    return (
        <>
            <a className="a-nav" href=".app">{text}</a>
        </>
        )

}

function Header (){
    
    return (
    <header className="header-container">
        <h1 className='store-name'>VERO <i className='store-name-i'>Store</i></h1>
        <nav className="nav-header">
            <NavButton text="NUEVO"></NavButton>
            <NavButton text="DESCUENTO"></NavButton>
            <NavButton text="ROPA"></NavButton>
            <NavButton text="ZAPATOS"></NavButton>
            <NavButton text="ACCESORIOS"></NavButton>
            <NavButton text="BELLEZA"></NavButton>
        </nav>
        <a id="button-bar" className='icon-header' href=".nav-header" ><FontAwesomeIcon icon={faBars} size="lg"/></a>
  </header>);
};

export default Header;