import React from 'react';

// we pass parameter with the passedcomponent to perform same operation but with different nature or value
const withCounter= (WrappedComponent, param)=>{
    class WithCounter extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                count:0
            };
        }

        clickHandler = (e)=>{
            this.setState((prevState)=>({count:prevState.count+param}));
        }

        // Remember the props while calling the component isnot visible in that component rather in HOC so 
        // always remember to pass the props with spread operator
        render(){
            return(
                <WrappedComponent clickHandle = {this.clickHandler} count= {this.state.count} {...this.props}/> 
            )
        }

    }

    return WithCounter;
}
   


export default withCounter
