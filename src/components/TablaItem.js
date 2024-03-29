import React from 'react'

function TablaItem(props) {
  return (
    <tbody className='table__fila'>
      <tr>
        <td>{props.id}</td>
        <td>{props.item}</td>
        <td>{props.description}</td>
        <td>{props.category}</td>
        <td>{props.price}</td>
        <td>{props.state}</td>
        <td>
          <button className='button button__blue' onClick={props.handleFoto}>Editar</button>
          <button className='button button__red' onClick={props.deleteItem} >Eliminar</button>
        </td>
      </tr>
    </tbody>
  )
}

export default TablaItem