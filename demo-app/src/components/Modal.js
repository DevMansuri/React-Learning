import React from 'react'

function Modal(props) {
    function deleteMsg() {
        alert("delete succees");
        props.onClick();
    }
  return (
    <div className='modal'>
        <p> Are you sure to delete ? </p>
        <button className='btn btn--alt' onClick={props.onClick}>Cancle</button>
        <button className='btn' onClick={deleteMsg} >Confirm</button>
    </div>
  )
}

export default Modal