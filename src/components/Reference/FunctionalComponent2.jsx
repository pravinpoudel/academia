import React, { useState, useRef, useEffect } from 'react';

function FunctionalComponent2(props){

    const [name, setName] = useState("");
    const inputRef = useRef(null);
    const prevName = useRef("N/A");
    useEffect(()=>{
        prevName.current = name
    }, [name]);



    const changeName = (event)=>{
        console.log(event.target.value);
        setName(event.target.value);
    }
    return(
        <>
        <h1>My previous name is {prevName.current} and current Name is {name}</h1>
        <input value={name} onChange = {changeName} ref={inputRef} /> 
        </>
    );

}

export default FunctionalComponent2;