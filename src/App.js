function Food({name,picture}){
  
  return (
    <div>
      <h1>I LOVE {name}</h1>
      <img src={picture}/>
    </div>
    
  );
}

const foodLike =[
  {name:'kimchi',
   image:'https://shop.hansalim.or.kr/shopping/is/itm/100101024/100101024_1_568.jpg'
  }
  ,{name:'ramen',
   image:'https://m.health.chosun.com/site/data/img_dir/2022/09/23/2022092301908_0.jpg'}
];

function randerFood(dish){
  return <Food name={dish.name} picture={dish.image}/>
}

function App() {
  //return <div className="App"/>;
  return (
    <div>
        
      {foodLike.map(randerFood)}
    </div>
  );
}

export default App;
