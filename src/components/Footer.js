import React from 'react'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer () {
  return(
    <footer className="footer-container">
      <h2 className='store-name'>ELINA CLOSET</h2>

      <div className="icon-footer">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <hr className="line-footer"></hr>
      <div className="credits">
        <p>Created © 2022</p>
        <p>Diseñado por: <a href="https://luichix.github.io/portafolio/" target="_blank" rel="noreferrer"><code>Luichix Rex</code></a></p>
      </div>
    </footer>
  )
}

export default Footer