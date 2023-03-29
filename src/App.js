import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import Hero from './component/hero';
import Navbar from './component/navbar';
import data from './component/data';

function App() {
  const card=data.map(item=>{
    return (
      <Card
      key={item.id}
      item={item}
      />
    )
  })
  return (
    <div className="App">

      <Navbar/>
      <Hero/> 
      <section className='card-list'>
      {card}
      </section>
      
       
      
      
    </div>
  );
}

export default App;
