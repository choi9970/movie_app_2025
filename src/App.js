import PropTypes, { string } from "prop-types";

function Food({name,picture,rating}){
  
  return (
    <div>
      <h1>I LOVE {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
    
  );
}

const foodLike =[
  {
    id:1,
    name:'kimchi',
   image:'https://shop.hansalim.or.kr/shopping/is/itm/100101024/100101024_1_568.jpg',
   rating : 5
  }
  ,{
    id:2,
    name:'ramen',
   image:'https://m.health.chosun.com/site/data/img_dir/2022/09/23/2022092301908_0.jpg',
   rating : 4.9}
];

function App() {
  //return <div className="App"/>;
  return (
    <div>
        
      {foodLike.map(dish=> (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
    </div>
  );
}

Food.propTypes ={
  name:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  rating:PropTypes.number
};

export default App;
