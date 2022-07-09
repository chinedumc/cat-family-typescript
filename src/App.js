import "./App.css";
import { useState, useEffect } from "react";
import { CardList } from "./components/card-list/cardList.component";
import { SearchBox } from "./components/search-box/search-box.component";

const App3 = () => {

		const [monsters, setMonsters] = useState([])
		const [searchField, setSearchField] =  useState(' ')
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)

	const handleChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase()
    setSearchField(searchFieldString);
	};

	useEffect (() => {
    	fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users))  
  },[])
		
	useEffect(() => {
    	const newFilteredMonsters = monsters.filter((monster) =>
				monster.name.toLowerCase().includes(searchField)
			);
      setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

		return (
			<div className="App">
				<h1>Cat Family</h1>
				<SearchBox placeholder="Search Here" handleChange={handleChange} />
				<CardList monsters={filteredMonsters}/>
			</div>
		);
	}

export default App3;
