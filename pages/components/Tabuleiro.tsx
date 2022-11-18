import React from 'react'
import Rows from './Rows'

export default function Tabuleiro() {
  return (
    <div className='tabuleiro'>
        <Rows />
        <Rows black/>
        <Rows />
        <Rows black />
        <Rows  />
        <Rows black/>
        <Rows />
        <Rows black/>
    </div>
  )
}
