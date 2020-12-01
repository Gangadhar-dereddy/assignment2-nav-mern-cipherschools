import React, {Component} from 'react';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    count:0
  }
}
increment = () => {
  this.setState({ count: this.state.count + 1});
}
decrement = () => {
  this.setState({ count: this.state.count - 1});
}
ref = () => { 
  this.setState({ count:0});
}
render(){
return(
<div className="full">
  <div className="ui">
<h1>{this.state.count}</h1>
</div>
<div className="backend">
<button onClick={this.increment} className="counter">+</button>
<button onClick={this.ref} className="counter">Ref</button>
<button onClick={this.decrement} className="counter">-</button>
</div>
</div>
);
}
}
export default App;
