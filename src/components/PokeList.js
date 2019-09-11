import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {

  render(){
    return(
      <ul className="pokeList">
          {this.props.list.map((pokemon) => {
        return (
          <li className = 'pokemon-item' key={pokemon.id}>
          <Pokemon 
          pokeUrl = {pokemon.url}
          pokeName = {pokemon.name}
          pokeTypes = {pokemon.types}
          />
           
          </li>
        );
      })}

        </ul>
    )
  }
}

export default PokeList;