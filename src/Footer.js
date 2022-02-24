import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer () {
    return(
    <footer class="footer-container">
		<h1 className='store-name'>VERO</h1>
		
		<div className="icon-footer">
			<FontAwesomeIcon icon={faFacebook} />
			<FontAwesomeIcon icon={faWhatsapp} />
			<FontAwesomeIcon icon={faInstagram} />
		</div>
		<hr className="line-footer"></hr>
		<div class="credits">
			<p>Created © 2022</p>
			<p>Diseñado por: <a href="https://luichix.github.io/portafolio/" target="_blank" rel="noreferrer"><code>Luichix Rex</code></a></p>
        </div>
	</footer>
    );
};

export default Footer;