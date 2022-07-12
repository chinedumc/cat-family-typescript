import {Monster} from '../../App'
import  './card.style.css'

type CardProps = {
	monstera: Monster
}

export const Card = ({monstera}: CardProps) => {
	const {id, name, email} = monstera
  return (
		<div className='card-container' >
			<img src={`https://robohash.org/${id}?set=set4&size=150x150`} alt={`monster ${name}`} />
			<h3 >{name} </h3>
			<p>{email}</p>
		</div>
	);
}