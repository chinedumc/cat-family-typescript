import React from "react";
import { Card } from "../card/card.component";
import './cardList.style.css';

export const CardList = (props) => {
	return (
		<div className="card-list">
			{props.monsters.map((monstery) => (
				<Card key={monstery.id} monstera={monstery}/>
			))}
		</div>
	);
};
