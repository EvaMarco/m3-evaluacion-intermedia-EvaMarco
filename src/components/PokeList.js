import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
class PokeList extends React.Component {
  applyZoom(id){
      return (this.props.id === id ? 'zoom' :  '')
    } 
  render(){
    return(
      <ol className="pokeList">
        {this.props.list.map((pokemon) => {
            return (
              <li className={`pokemon-item ${this.applyZoom(pokemon.id)}`} key={pokemon.id} onClick = {this.props.clickAction} id = {pokemon.id}>
                <Pokemon 
                pokeUrl = {pokemon.url}
                pokeName = {pokemon.name}
                pokeTypes = {pokemon.types}
                />       
              </li>
              );
            }
          )
        }
      </ol>
    )
  }
}

PokeList.propTypes = {
  list: PropTypes.array.isRequired,
  clickAction: PropTypes.func.isRequired
}
export default PokeList;