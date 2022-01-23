
import React from "react";




function Counter(){



    const [ count, setCount] = React.useState(0)



    // ComponentDidMount

    React.useEffect(() => {

        window.document.body.style.backgroundColor = 'rgb(19, 247, 209)'

        console.log("hello world :)");  
    },[])

    React.useEffect(() => {
        console.log("Updated :|");
        if (count === 33) {
            window.document.body.style.backgroundColor = 'green'
        }
        if (count === 11) {
            window.document.body.style.backgroundColor = 'rgb(18, 238, 18)'
        }
        if (count === 22) {
            window.document.body.style.backgroundColor = 'rgb(10, 201, 10)'
        }
        if (count === 100) {
            window.document.body.style.backgroundColor = 'blue'
        }
        
    },[count])


    
    React.useEffect(() => {
       return ()=> {
        window.document.body.style.backgroundColor = 'red' 
        
       }   
    },[])


    return(
        <>
            <div>

                <h1 className="counter">{count}</h1>

             

                <button className="btn"  onClick={() => setCount (count + 1 )} >Oldinga</button>

                <button className="btn"  onClick={() => setCount (count - 1 )} >orqaga</button>

               
            </div>

         
        </>
    )
}

export default Counter;