import { data } from 'jquery';
import React, { useState, useRef, useEffect } from 'react';

function FunctionalComponent2(props){

    const [name, setName] = useState("");
    const [resource, resourceChange] = useState("");
    const [data, changeData] = useState([]);

    const inputRef = useRef(null);
    const prevName = useRef("N/A");

    useEffect(()=>{
        prevName.current = name
    }, [name]);


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response=>response.json())
        .then(data=> changeData(data))
    }, [resource]);


    const changeName = (event)=>{
        console.log(event.target.value);
        setName(event.target.value);
    }

    const mappedData = data.map((element, index)=>{
            element = JSON.stringify(element);
            return <li key={index} className="list-group-item" style={{color:"black"}}>{element}</li>;
        })      

    return(
        <>
       
        <h1>My previous name is {prevName.current} and current Name is {name}</h1>
        <input value={name} onChange = {changeName} ref={inputRef} /> 

        <ul className="list-group">
        {mappedData}      
        </ul>

        <button className="btn btn-primary" onClick = {()=>resourceChange("Posts")} >POSTS</button>
        <button className="btn btn-danger" onClick={()=>resourceChange("Albums")}>ALBUMS</button>
        <button className="btn btn-warning" onClick={()=>resourceChange("Photos")}>PHOTOS</button>
       
        </>
    );

}

export default FunctionalComponent2;