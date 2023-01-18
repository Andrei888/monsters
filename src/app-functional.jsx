import { useEffect, useState } from "react";
import CardListFunctional from "./components/card-list/card-list.functional.component";
import SearchBox from "./components/search-box/search-box.component";

const AppFunctional = () => {
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newfilterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilterMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearchField(e.target.value.toLowerCase());
  };

  return (
    <div className="app-functional">
      <h1>Monster Index</h1>
      <SearchBox
        className="search-field"
        onSearchHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      {/*filterMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h2>{monster.name}</h2>
            </div>
          );
        })*/}
      <CardListFunctional monsters={filterMonsters} />
    </div>
  );
};

export default AppFunctional;
