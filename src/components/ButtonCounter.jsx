import React, {Component} from 'react';
import withCounter from "./withCounter"

class ButtonCounter extends Component{

    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <button className=" btn btn-success" onClick={this.props.clickHandle} >I am clicked {this.props.count} times</button>
        );
    }
}

export default withCounter(ButtonCounter);