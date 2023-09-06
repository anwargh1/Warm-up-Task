import Header from "./Componant/Header/Header";
 import './App.css'
import SearchBar from "./Componant/SearchBar/SearchBar";
import Button from "./Componant/Button/Button";
import Teams from "./Componant/Teams/Teams";
function App() {
  return (
    <div className="frontEnd-team">
       <Header/>
       <SearchBar/>
       <Teams/>
       <Button/>
    </div>
  );
}

export default App;
