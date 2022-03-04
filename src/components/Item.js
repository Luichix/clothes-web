import React from 'react'


const Item = (props) => {
  return(
    (
      <div className="item-gallery">
        <div className="photo-gallery">
          <img className="img-photo" alt ="" src={props.urlImg}></img>
        </div>
        <div className="info-photo">
          <h4>{props.item}</h4>
          <p><b>Precio: C$ {props.precio}</b></p>
        </div>
      </div>
    )
  )
}

export default Item