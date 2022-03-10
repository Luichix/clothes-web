import React from 'react'
import '../css/Modal.css'

function Modal ({ children }) {
  const closeModal = () => {
    document.getElementById('myModal').style.display=('none')
  }
  const handleModalContent = e => e.stopPropagation()

  return (
    <article id="myModal" className='modal' onClick={closeModal}>
      <div className='modal-content' onClick={handleModalContent}>
        <button className='modal-close' onClick={closeModal}>&times;</button>
        {children}
      </div>
    </article>
  )
}

export default Modal