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
        <td><button className='button button__green' onClick={props.handleFoto}>Ver</button></td>
        <td>
          <button className='button button__red'>Eliminar</button>
          <button className='button button__blue'>Actualizar</button>
        </td>
      </tr>
    </tbody>
  )
}

export default TablaItem