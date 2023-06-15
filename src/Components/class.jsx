import React from 'react'

export default class Calculator extends React.Component{
constructor(props){
    super(props);
    this.state={
      a:'',
      b:'',
      result:''
    }
}


handleA=(e)=>{
   this.setState({a:e.target.value})
}
handleB=(e)=>{
    this.setState({b:e.target.value });
}
add=()=>{
    const {a,b} = this.state;
    const result = Number(a)+Number(b);
    this.setState({result});
    
    
    
}
subtract=()=>{
    const{a,b} = this.state;
    const result = Number(a)-Number(b);
    this.setState({result});
}
multiply=()=>{
    const{a,b}=this.state;
    const result =  Number(a)*Number(b);
    this.setState({result});
}
divide=()=>{
    const{a,b} = this.state;
    const result =  Number(a)/Number(b);
    this.setState({result});
}

render(){
    return(
        <div className="counter">
           
            <input type="number" id="a" placeholder='Enter the first number' value={this.state.a} onChange={(e)=>this.handleA(e)}/><br></br>
            <input type="number" id='b' placeholder='Enter the second number' value={this.state.b} onChange={(e)=>this.handleB(e)}/>
            <div className='buttons'>
                <button onClick={this.add}>Add</button>
                <button onClick={this.subtract}>Subtract</button>
                <button onClick={this.multiply}>Product</button>
                <button onClick={this.divide}>Divide</button>
            </div>
<p>Result: {this.state.result}</p>
        </div>
    )
}
}

