import React from 'react'
import  './card.style.css'

export const Card = ({monstera}) => {
	const {id, name, email} = monstera
  return (
		<div className='card-container' >
			<img src={`https://robohash.org/${id}?set=set4&size=150x150`} alt={`monster ${name}`} />
			<h3 >{name} </h3>
			<p>{email}</p>
		</div>
	);
}