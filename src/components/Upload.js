import React, { useState } from 'react'
import imageService from '../services/image'
import Alert from './Alert'


function Upload () {
  const [item, setItem] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [stock, setStock] = useState('')
  const [price, setPrice] = useState('')
  const [state, setState] = useState('')
  const [fileInputState, setFileInputState]= useState('')
  const [previewSource, setpreviewSource] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]
    if(!file) {
      setFileInputState('')
      setSelectedFile('')
      setpreviewSource('')
    } else {
      previewFile(file)
      setSelectedFile(file)
      setFileInputState(event.target.value)}
  }

  const previewFile= (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setpreviewSource(reader.result)
    }
  }

  const handleSubmitFile = (event) => {
    event.preventDefault()
    if (!selectedFile) return
    const reader = new FileReader()
    reader.readAsDataURL(selectedFile)
    reader.onloadend = () => {
      uploadImage(reader.result)
    }
    reader.onerror = () => {
      console.error('AHHHHHHHHHHHHHHHHHHH!!!')
      setErrMsg('something went wrong!')
    }
  }

  const uploadImage = (base64EncodedImage) => {
    const imageObject = {
      data: base64EncodedImage,
      item,
      description,
      category,
      stock,
      price,
      state
    }
    imageService
      .upload(imageObject)
    setItem('')
    setDescription('')
    setCategory('')
    setStock('')
    setPrice('')
    setState('')
    setFileInputState('')
    setpreviewSource('')
    setSuccessMsg('Image uploaded successfully')
  }

  return (
    <>
      <div className='uploadContainer'>
        <h2>Upload Image</h2>
        <Alert msg={errMsg} type="danger" />
        <Alert msg={successMsg} type="success" />
        <form onSubmit={handleSubmitFile} className="uploadForm" autoComplete='off'>
          <input
            id="fileInput"
            type="file"
            name="image"
            className='inputImage'
            onChange={handleFileInputChange}
            value={fileInputState}
            required
          />
          <input type="text" value={item} name='item' className='inputUpload' placeholder='Nombre del item' required
            onChange={({ target }) => setItem(target.value)}/>
          <input type="text" value={description} name='descripcion' className='inputUpload' placeholder='Descripción' required
            onChange={({ target }) => setDescription(target.value)}/>
          <input type="text" value={category} name='category' className='inputUpload' placeholder='Categoria' required
            onChange={({ target }) => setCategory(target.value)}/>
          <input type="number" value={stock} name='stock' className='inputUpload' placeholder='Stock' required
            onChange={({ target }) => setStock(target.value)}/>
          <input type="number" value={price} name='price' className='inputUpload' placeholder='Precio' required
            onChange={({ target }) => setPrice(target.value)}/>
          <input type="text" value={state} name='state' className='inputUpload' placeholder='Estado' required
            onChange={({ target }) => setState(target.value)}/>
          <button type='submit' className='buttonUpload'>Cargar</button>
        </form>
        {previewSource && (
          <img className='uploadImage'
            src={previewSource}
            alt="chosen"
            style={{ height: '300px', width: '300px' }}
          />
        )}
      </div>
    </>
  )
}

export default Upload

