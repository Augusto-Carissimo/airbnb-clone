import group from "../images/Group 77.png"
import '../css/Hero.css';

function Hero() {
  return(
    <section className="hero">
      <img src={group} className="hero-image" alt="Group" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero