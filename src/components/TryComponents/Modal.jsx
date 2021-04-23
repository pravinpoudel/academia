import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Modal =({ message, isOpen, onClose, children })=> {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
       <div className="modal">
        <span>{message}</span>
        <button onClick={onClose}>Close</button>
       </div>
      ,document.body);
    }

  function Component() {
    const [open, setOpen] = useState(false)
    return (
      <div className="component">
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal 
         message="Hello World!" 
         isOpen={open} 
         onClose={() => setOpen(false)}
        />
      </div>
    )
  }

export default Component;