import React from 'react';

export default class ErrorBoundary extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error: "",
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo){
        // console.log(errorInfo)
        this.setState({
            error: errorInfo,
            hasError:true
        })
    }

    render(){
       
           if(this.state.hasError){
               return <h1>{this.state.error}</h1>
           } 

           return this.props.children
        
    }
}
