import React, { useEffect, useState } from 'react'
import Item from './Item'
import imageService from '../services/image'
import Modal from './Modal'
import Footer from './Footer'
import Paginate from './Paginate'

function ModalMain(props) {
  return (
    <Modal>
      <img className="imageModal" src={props.imageModal.imageUrl} />
      <div className="dataModal">
        <h4>{props.imageModal.item}</h4>
        <span>{props.imageModal.description}</span>
        <span>C$ {parseInt(props.imageModal.price).toFixed(2)}</span>
        <span className="spanRed">{props.imageModal.state} </span>
        <button>Comprar</button>
      </div>
    </Modal>
  )
}

function Main() {
  const [store, setStore] = useState([])
  const [storeFromPaginate, setStoreFromPaginate] = useState(null)
  const [imageModal, setimageModal] = useState({})
  const [itemsPerPage] = useState(2)
  const [page, setPage] = useState(1)


  useEffect(() => {
    imageService.getAll().then((initialShop) => {
      setStore(initialShop)
    })
  }, [])

  const updatedStoreFromPaginate = store => setStoreFromPaginate(store)

  const openModal = (data) => {
    document.getElementById('myModal').style.display = 'flex'
    setimageModal(data)
  }

  return (
    <>
      <main className="main-container">
        <article className="discoint-article">
          <span>PUEDES SEGUIR NUESTRAS REDES SOCIALES...</span>
        </article>
        <h2 className="title-section">Todo lo que tenemos...</h2>
        <p className="message-section">
          Estas buscando alguna prenda... Bueno, has venido al lugar correcto,
          boo. Mira todo lo que tenemos y escoge lo que gustes... Estamos en la pagina n° {page}
        </p>
        <ModalMain imageModal={imageModal}></ModalMain>
        { store ? (
          <Paginate data={store} itemsPerPage={itemsPerPage} setData={updatedStoreFromPaginate} setPage={setPage} />
        ) : null}
        <section className="gallery-grid">
          {storeFromPaginate
            ?storeFromPaginate.map((shop) => (
              <Item
                key={shop.id}
                item={shop.item}
                description={shop.description}
                category={shop.category}
                state={shop.state}
                precio={shop.price.toFixed(2)}
                urlImg={shop.imageUrl}
                click={() => openModal(shop)}
              />
            )) :
            store.map((shop) => (
              <Item
                key={shop.id}
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
      <Footer />
    </>
  )
}

export default Main
