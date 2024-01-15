import './css/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js'
import star from "./images/Star 1.png"
console.log(data)

function App() {
  const cards = data.map(data => {
    return(
        <Card
          key={data.id}
          title={data.title}
          price={data.price}
          coverImg={data.coverImg}
          rating={data.stats.rating}
          reviewCount={data.stats.reviewCount}
          star={star}
        />)
  })
  return(
    <container>
      < Navbar />
      < Hero />
      <section className='card-list'>
        {cards}
      </section>
    </container>
  )
}

export default App;
