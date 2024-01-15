import '../css/Card.css';

function Card(props) {
  return(
    <div className="card">
      <img src={require("../images/" + props.coverImg)} className="card-image" alt='cover_image' />
      <div className="card-stats">
        <img src={props.star} className="card-star" alt='star_iamge'/>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) </span>
        -
        <span className="grey"> USA</span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card