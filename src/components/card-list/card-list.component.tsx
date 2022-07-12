import { Monster } from "../../App";
import { Card } from "../card/card.component";
import './card-list.style.css';

type CardListProps = {
	monsters: Monster[];
};

export const CardList = ({ monsters }: CardListProps) => {
	return (
		<div className="card-list">
			{monsters.map((monstery) => (
				<Card key={monstery.id} monstera={monstery} />
			))}
		</div>
	);
};
