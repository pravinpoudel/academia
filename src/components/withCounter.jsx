import React from 'react';

const withCounter= (PassedComponent)=>
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                count:0
            };
        }

        clickHandler = (e)=>{
            this.setState((prevState)=>({count:prevState.count+1}));
        }

        render(){
            return(
                <PassedComponent clickHandle = {this.clickHandler} count= {this.state.count} /> 
            )
        }

    }
   


export default withCounter
