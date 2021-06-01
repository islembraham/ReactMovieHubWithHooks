import "./App.css";
import { data } from "./data";
import {  useState } from "react";


import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";

function App() {

  const [movies, setMovies] = useState(data);
  


  return (
    <div className="app">

      <Header />

        <Container>
            
            <Search movies={movies} setMovies={setMovies} /> 
            <Movies movies={movies} setMovies={setMovies}/>
            
          
        </Container>
        

      </div>

  );
}

export default App;
