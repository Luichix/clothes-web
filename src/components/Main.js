import React, { useEffect, useState } from 'react'
import Item from './Item'
import imageService from '../services/image'
import Modal from './Modal'
import Footer from '../components/Footer'

function Main () {
  const [store, setStore] = useState([])
  const [imageModal, setimageModal] = useState({})

  useEffect(() => {
    imageService
      .getAll()
      .then( initialShop => {
        setStore(initialShop)
      })
  },[])

  const openModal = (data) => {
    document.getElementById('myModal').style.display=('flex')
    setimageModal(data)
  }

  return(
    <>
      <main className="main-container">
        <article className="discoint-article"><span>PUEDES SEGUIR NUESTRAS REDES SOCIALES...</span></article>
        <h2 className="title-section">Todo lo que tenemos...</h2>
        <p className="message-section">Estas buscando alguna prenda... Bueno, has venido al lugar correcto, boo. Mira todo lo que tenemos y escoge lo que gustes... </p>
        <Modal>
          <img className='imageModal' src={imageModal.imageUrl} />
          <div className='dataModal'>
            <h4>{imageModal.item}</h4>
            <span>{imageModal.description}</span>
            <span>C$ {parseInt(imageModal.price).toFixed(2)}</span>
            <span className='spanRed'>{imageModal.state} </span>
            <button>Comprar</button>
          </div>
        </Modal>
        <section className="gallery-grid">

          { store.map((shop) => (
            <Item key={shop.id}
              item={shop.item}
              description={shop.description}
              category={shop.category}
              state={shop.state}
              precio={shop.price.toFixed(2)}
              urlImg={shop.imageUrl}
              click={() => openModal(shop)}
            />
          )) }
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Main