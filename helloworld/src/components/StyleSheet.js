import React from 'react'
import './myStyle.css'

const heading = {
    color : 'blue'        
}
function StyleSheet() {
    
  return (
    <div><h1 className='primary'>StyleSheet</h1>
    <h1 style={heading}>Nadim</h1></div>
  )
}
export default StyleSheet
