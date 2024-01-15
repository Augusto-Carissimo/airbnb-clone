import '../css/Card.css';
import star from "../images/Star 1.png"


function Card(props) {
  let badgeText
  if (props.openSpot === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE'
  }

  return(
    <div className="card">
      {badgeText && <div className='card-badge'> {badgeText} </div> }
      <img src={require("../images/" + props.coverImg)} className="card-image" alt='cover_image' />
      <div className="card-stats">
        <img src={star} className="card-star" alt='star_iamge'/>
        <span>{props.stats.rating}</span>
        <span className="grey">({props.stats.reviewCount}) </span>
        -
        <span className="grey"> {props.location}</span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card