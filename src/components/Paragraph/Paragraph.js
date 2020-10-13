import React from 'react'
import './Paragraph.css'

const Paragraph = ({ children, onClick }) => (
  <p className='Paragraph' onClick={onClick}>
    {children}
  </p>
)

export default Paragraph
