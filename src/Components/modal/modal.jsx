import React from "react";
import './modal.scss'

const Modal = React.forwardRef(({text}, ref) => {
  return(
      <>
        <div className='modal' ref={ref} onClick={(evt)=> {
          if(evt.target.matches('.modal')){
            ref.current.classList.remove('modal--open')
          }
        }}>
            <div className="modal__inner">

              <h1>{text}</h1>
              <button className="btnn" onClick={()=> ref.current.classList.remove('modal--open')}>X</button>
            </div>
        </div>
      </>
  )
})

export default Modal;