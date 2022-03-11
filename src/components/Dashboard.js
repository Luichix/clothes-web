import React, { useEffect, useState } from 'react'
import imageService from '../services/image'
import TablaItem from './TablaItem'
import '../css/Dashboard.css'
import Modal from './Modal'

function ModalDashboard(props) {
  return (
    <Modal>
      <h3 style={{ textAlign: 'center', color: '#333' }}>{props.imageModal.item}</h3>
      <img className="imageModal" src={props.imageModal.imageUrl} />
    </Modal>
  )
}

const Dashboard = () => {
  const [data, setData] = useState([])
  const [product, setProduct] = useState([])

  useEffect(() => {
    imageService
      .getAll()
      .then( initialData => {
        setData(initialData)
      })
  },[])

  const openModal = (info) => {
    document.getElementById('myModal').style.display = 'flex'
    setProduct(info)

  }


  return (
    <>
      <ModalDashboard imageModal={product}></ModalDashboard>
      <div className='dashboard'>
        <table className='table'>
          <thead>
            <tr>
              <th>N°</th>
              <th>Item</th>
              <th>Description</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Imagen</th>
              <th>Accion</th>
            </tr>
          </thead>
          { data.map( (info, index) => (
            <TablaItem
              key={info.id}
              id={index+1}
              item={info.item}
              category={info.category}
              description={info.description}
              price={info.price.toFixed(2)}
              state={info.state}
              handleFoto={() => openModal(info)} />
          ))}
        </table>
      </div>
    </>
  )
}

export default Dashboard