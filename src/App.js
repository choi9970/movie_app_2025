import React from "react";

class App extends React.Component{
  state={
    isLoading: true,
    movies:[],
  };
  componentDidMount(){
    //영화 데이터 로딩
    setTimeout(()=>{this.setState({isLoading:false});},600);
  }

  render(){
    const { isLoading }= this.state;
    return <div>{isLoading ? 'loading...' : 'we are ready'}</div>;
  }
}

export default App;
