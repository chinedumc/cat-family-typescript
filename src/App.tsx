import "./App.css";
import { useState, useEffect, ChangeEvent } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import { getData } from "./utils/data.utils";

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App3 = () => {
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [searchField, setSearchField] = useState(" ");
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = e.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Monster[]>(
				"https://jsonplaceholder.typicode.com/users"
			);
			setMonsters(users);
		};

		fetchUsers()
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField)
		);
		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	return (
		<div className="App">
			<h1>Cat Family</h1>
			<SearchBox placeholder="Search Here" handleChange={handleChange} />
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App3;
