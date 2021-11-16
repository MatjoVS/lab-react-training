import React from 'react';

const Greetings=(props)=>{
    if(props.lang==='sw'){
        return(
            <div>
                <p>God dag {props.children}</p>
            </div>
        )
    }else{
       return(
       <div>
        <p> Bonjour {props.children}</p>
        </div>
        )
       
    }
}
export default Greetings;