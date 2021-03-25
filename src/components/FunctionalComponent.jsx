import { useState } from "react";

const FunctionalComponent = (props)=>{

    const [state, setState] = useState({count:0, theme:"blue"});

    const handleClick = (e)=>{
        setState((prevState)=> { return{theme:"blue",  count: prevState.count+1 }});
    }

    const handleTheme = (e)=>{
        setState((prevState)=>{
            return{ ...prevState, theme: "red"  }
        });
    }
    return(
        <>
        <p>{state.theme} Clicked {state.count} times</p>
        <button className="btn btn-primary" name = "count" onClick={handleClick}>Click Me</button>
        <button className="btn btn-danger" name = "theme" onClick={handleTheme}>Click Me</button>
        </>
    );
}

export default FunctionalComponent;