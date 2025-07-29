import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");//첫번째 실행
  }

  state = {
    count:0,
  };

  add=()=>{
    this.setState(current => ({
      count: current.count +1  
    }));
  };

  minus=()=>{
    this.setState(current => ({
      count: current.count -1  
    }));
  };

  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate(){
    console.log('i just update');
  }

  componentWillUnmount(){
    console.log('good bye');
  }

  render(){
    console.log('randeing');//두번째 실행
    return (
    <div>
      <h1>난 테스트{this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
