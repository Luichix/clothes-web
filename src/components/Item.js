import React from 'react'


const Item = (props) => {
  return(
    (
      <div className="item-gallery" >
        <div className="photo-gallery">
          <img className="img-photo"
            alt ={props.item}
            src={props.urlImg}
            onClick={props.click}
          />
        </div>
        <div className="info-photo">
          <h4>{props.item}</h4>
          <p><b>Precio: <i className='info-price'>C$ {props.precio}</i></b></p>
        </div>
      </div>
    )
  )
}

export default Item