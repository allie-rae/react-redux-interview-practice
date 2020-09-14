import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPokeList, addPokemon, removePokemon } from './actions';


function App(props) {

  useEffect(() => {
    props.getPokeList()
  }, [])

  console.log("props", props)

  return (
    <div className="App">
      <p>Choose your six:</p>
      <div className="poke-container">
        { props.userPokeList.length === 0
          ? <p>No Pokemon are in your party!</p>
          : props.userPokeList.map(pokemon => <div key={pokemon.name} className="poke-card" onClick={() => props.removePokemon(pokemon)}><img src={pokemon.img} />{pokemon.name}</div>)
        }
      </div>
      <div className="poke-container">
        { props.isFetching 
          ? <p>Loading...</p>
          : props.genericPokeList.map(pokemon => <div key={pokemon.name} className="poke-card" onClick={() => props.addPokemon(pokemon)}><img src={pokemon.img} />{pokemon.name}</div>)
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { getPokeList, addPokemon, removePokemon })(App);
