import React, {Component} from 'react';
import withCounter from "./withCounter"
import Rform from "./Utility/Rform";

import styles from "./cssModule/button.module.css"

class ButtonCounter extends Component{

    constructor(props){
        console.log(props)
        super(props);
        this.state={};
    }

    render(){

        const style={
           
        }
      
        return(
            <>
            <Rform />
            <button style={style} onClick={this.props.clickHandle}> {this.props.name} didn't clicked this {this.props.count} times</button>
            </>
        );
    }
}


export default withCounter(ButtonCounter, 10);