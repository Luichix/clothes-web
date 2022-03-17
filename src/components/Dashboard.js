import React, { useEffect, useState } from 'react'
import imageService from '../services/image'
import TablaItem from './TablaItem'
import '../css/Dashboard.css'
import Modal from './Modal'
import Alert from './Alert'
import Paginate from './Paginate'

const initialForm = {
  item: '',
  description: '',
  category: '',
  price: '',
  state: '',
  imageUrl: '',
}

const Dashboard = () => {
  const [data, setData] = useState([])
  const [dataFromPaginate, setDataFromPaginate] = useState(null)
  const [errMsg, setErrMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [id, setId] = useState('')
  const [form, setForm] = useState(initialForm)
  const [itemsPerPage] = useState(2)
  const [page, setPage] = useState(0)

  useEffect(() => {
    imageService
      .getAll()
      .then( initialData => {
        setData(initialData)
      })
  },[])

  const updatedDataFromPaginate = data => setDataFromPaginate(data)
  const handleUpdate = (event) => {
    event.preventDefault()

    const imageObject = {
      item: form.item,
      description: form.description,
      category: form.category,
      stock: form.stock,
      price: form.price,
      state: form.state
    }
    imageService
      .updated(form.id, imageObject)
      .then(dataUpdate => setData(data.map(note => note.id === dataUpdate.id ? dataUpdate: note )))
    document.getElementById('myModal').style.display = 'none'
    setSuccessMsg('Image uploaded successfully')
  }

  const openModal = (info, index) => {
    setId(index)
    setForm(info)
    document.getElementById('myModal').style.display = 'flex'
  }

  const handleChange = (e) => {
    setForm({ ...form,
      [e.target.name]: e.target.value })
  }

  const deleteItem = (id, item) => {
    let option= window.confirm(`¿Realmente desde eliminar el registro de ${item}?`)
    const dataFilter = data.filter( n => n.id !== id )

    if (option){
      try {
        imageService.deleted(id)
        setData(dataFilter)
        setSuccessMsg('Image uploaded successfully')

      } catch (exception){
        console.log(exception.name)
        console.error('AHHHHHHHHHHHHHHHHHHH!!!')
        setData(dataFilter)
        setErrMsg(`El item ${item} ya ha sido eliminado de la base de datos!`)
        setTimeout(() => {
          setErrMsg(null)
        }, 5000)
      }
    } else {
      return
    }

  }

  return (
    <>
      <Alert msg={errMsg} type="danger" />
      <Alert msg={successMsg} type="success" />
      <Modal>
        <h3 style={{ textAlign: 'center', color: '#333' }}>Editar Registro</h3>
        <form onSubmit={handleUpdate} autoComplete='off' style={{ display: 'flex', flexDirection: 'column' } }>
          <label htmlFor='index'>Id:</label>
          <input name='index' type='text' value={id+1} readOnly ></input>
          <label htmlFor='item'>Item:</label>
          <input name='item' id='item' type='text' value={form.item}  onChange={handleChange} />
          <label id='description'>Descripcion:</label>
          <input name='description' id='description' type='text' value={form.description}  onChange={handleChange} />
          <label htmlFor='category'>Categoria:</label>
          <input name='category' id='category' type='text' value={form.category}  onChange={handleChange} />
          <label htmlFor='price'>Precio:</label>
          <input name='price' id='price' type='text' value={form.price}  onChange={handleChange} />
          <label>Estado:</label>
          <input name='state' type='text' value={form.state}  onChange={handleChange} />
          <img style={{ width:'150px', height:'auto' }} src={form.imageUrl} />
          <button type='submit'>Actualizar</button>
        </form>
      </Modal>
      <div className='dashboard'>
        { data ? (
          <Paginate data={data} itemsPerPage={itemsPerPage} setData={updatedDataFromPaginate} setPage={setPage} />
        ) : null}
        <table className='table'>
          <thead>
            <tr>
              <th>N°</th>
              <th>Item</th>
              <th>Description</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Accion</th>
            </tr>
          </thead>
          { dataFromPaginate
            ? dataFromPaginate.map( (info, index) => (
              <TablaItem
                key={info.id}
                id={page * itemsPerPage + index - itemsPerPage + 1}
                item={info.item}
                category={info.category}
                description={info.description}
                price={info.price}
                state={info.state}
                handleFoto={() => openModal(info, index)}
                deleteItem= {() => deleteItem(info.id, info.item)} />
            ))
            : data
              ? data.map( (info, index) => {
                if (index < itemsPerPage){
                  return(
                    <TablaItem
                      key={info.id}
                      id={index+1}
                      item={info.item}
                      category={info.category}
                      description={info.description}
                      price={info.price}
                      state={info.state}
                      handleFoto={() => openModal(info, index)}
                      deleteItem= {() => deleteItem(info.id, info.item)} />
                  )
                }
              })
              : <tbody><tr><td colSpan={8}>Sin datos</td></tr></tbody>
          }
        </table>
      </div>
    </>
  )
}

export default Dashboard