import React from 'react'
import './App.scss'

import Counter from './Components/Counter/Counter'

import Modal from './Components/modal/modal'


function App () {


    const elModalref = React.useRef(null)

    

   

   const[ toggle, setToggle] = React.useState(false)

    return(
        <>
            <button className='btn2' onClick={() => {
                         elModalref.current.classList.add('modal--open')
                     }}>Meni bosing</button>
         <h1 className='title'>Xayrulloh's Tasbex</h1>
        <button className='btn1' onClick={()=> setToggle(!toggle)}>Yangilamoq</button>
       { toggle ? <Counter/> : null}


   
                 

            <Modal ref={elModalref} text = 'بِاسْمِ اللهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاء وَهُوَ السَّمِيعُ العَلِيمُ'/>  




        </>
    )
   
}

export default App;