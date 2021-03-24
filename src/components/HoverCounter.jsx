import React from 'react';
import withCounter from "./withCounter"

class HoverCounter extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
        <>
            <hr />
            <h1 onMouseOver={this.props.clickHandle}>I am hovered {this.props.count} time</h1>
        </>
        );
    }
}
export default withCounter(HoverCounter, 5);