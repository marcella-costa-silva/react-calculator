import React from 'react'
import './Buton.css'

export default props => {
  let classes = 'button '
  classes += props.operation ? 'operation' : ''
  classes += props.double ? 'double' : ''
  classes += props.triple ? 'triple' : ''

  return (
    <button 
      onClick={e => props.click && props.click(props.label)} // recebe o conteúdo do que for clicado
      className={classes}>
      {props.label}
    </button>
  )
}
