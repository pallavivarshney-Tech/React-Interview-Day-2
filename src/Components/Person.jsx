import React, {Component} from 'react';

class Person extends Component{
  constructor(props){
    super(props)
    this.props=props;
    this.state={
       info:"child"
    }
}
   nameChangeHandler(){
    this.setState({
        info:"CHILD",
        age:"25",

        
    })
   }      
       

    
    render() {
        const pal={
backgroundColor:"pink",
        }
           
        return(
            <div style={{backgroundColor:"bisque"}}>
                <h3 style={pal}> this is how  we pass data from parent to {this.state.info}</h3>
                <button onClick={()=>this.nameChangeHandler()}>Hit It Out ! </button>
                </div>
        )
    }

}
export default Person;