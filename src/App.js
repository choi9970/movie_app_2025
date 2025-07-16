function Food({fav}){
  
  return (<h1>I LOVE {fav}</h1>);
}

function App() {
  //return <div className="App"/>;
  return (
    <div>
        <h1>Hello</h1>
        <Food fav="Kimchi" />
        <Food fav="Kimchi1" />
        <Food fav="Kimchi2" />

      </div>
  );
}

export default App;
