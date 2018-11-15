import React from 'react'


function CountClickChild(props){
    return <button onClick={props.clickHandler}>Increment</button>
}

export default CountClickChild;