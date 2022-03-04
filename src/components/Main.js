import React, { useEffect, useState } from 'react'
import Item from './Item'
import imageService from '../services/image'
import Header from './Header'
import Footer from './Footer'

function Main () {
  const [store, setStore] = useState([])

  useEffect(() => {
    imageService
      .getAll()
      .then( initialShop => {
        setStore(initialShop)
      })
  },[])

  return(
    <>
      <Header/>
      <main className="main-container">
        <article className="discoint-article"><span>20% DE DESCUENTO EXTRA CON CODIGO DE DESCUENTO</span></article>
        <h2 className="title-section">Todo lo que tenemos...</h2>
        <p className="message-section">Escuchamos que estabas buscando la venta oficial de Select... Bueno, has venido al lugar correcto, boo. Ingrese directamente a nuestro lugar favorito en el sitio: nuestra sección de ventas de siguiente nivel donde ... </p>

        <section className="gallery-grid">

          { store.map((shop) => (
            <Item key={shop.id} item={shop.item} precio={shop.price.toFixed(2)} urlImg={shop.url} />
          )) }
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Main