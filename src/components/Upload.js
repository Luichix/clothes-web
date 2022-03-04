import React, { useState } from 'react'
import imageService from '../services/image'


function Upload () {
  const [fileInputState, setFileInputState]= useState('')
  const [previewSource, setpreviewSource] = useState('')
  const [selectedFile, setSelectedFile] = useState('')

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]
    previewFile(file)
    setSelectedFile(file)
    setFileInputState(event.target.value)
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
    }
  }

  const uploadImage = (base64EncodedImage) => {
    const imageObject = {
      data: base64EncodedImage
    }
    imageService
      .upload(imageObject)

    setFileInputState('')
    setpreviewSource('')
  }

  return (
    <>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmitFile}>
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
        />
        <button type='submit'>Upload</button>
      </form>
      {previewSource && (
        <img
          src={previewSource}
          alt="chosen"
          style={{ height: '300px', width: '300px' }}
        />
      )}
    </>
  )
}

export default Upload

