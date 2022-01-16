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


   
                 

            <Modal ref={elModalref} text = '  Усмон ибн Аффон розияллоҳу анҳудан ривоят қилинади:
Расулуллоҳ соллаллоҳу алайҳи васаллам:
«Бирор бир банда ҳар тонгда ва тунда:

بِاسْمِ اللهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاء وَهُوَ السَّمِيعُ العَلِيمُ

«Бисмиллаҳиллазий лаа йазурру маъасмиҳи шай`ун фил арзи ва лаа фис самаи ва ҳувас самийъул ъалийм», деб уч марта айтса, унга бирор нарса зарар бермайди», дедилар.

(Маъноси: “Шундай Аллоҳнинг исми билан бошлайманки, Унинг исми туфайли еру осмонда бирор нарса зарар бера олмайди. У эшитувчи ва билувчи Зотдир”).'/>  

        </>
    )
   
}

export default App;