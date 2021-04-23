import React from 'react'

function Modals({children, isOpen, changeHandler}) {
    if(!isOpen) return null; 
    return (
        <div>
            {children}
            <hr />
            <button className="btn btn-primary" onClick={()=>changeHandler(false)}>Close</button>
            <hr />
        </div>
    )
}


export default Modals;