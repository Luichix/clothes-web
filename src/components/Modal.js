import React, { useRef } from 'react'
import '../css/Modal.css'

function Modal ({ children }) {
  let refModal = useRef()
  const closeModal = () => {
    refModal.current.style.display='none'
  }
  const handleModalContent = e => e.stopPropagation()

  return (
    <article id="myModal" className='modal' onClick={closeModal} ref={refModal}>
      <div className='modal-content' onClick={handleModalContent}>
        <button className='modal-close' onClick={closeModal}>&times;</button>
        {children}
      </div>
    </article>
  )
}

export default Modal