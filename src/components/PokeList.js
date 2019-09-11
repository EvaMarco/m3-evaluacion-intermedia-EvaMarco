import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
class PokeList extends React.Component {

  render(){
    return(
      <ol className="pokeList">
        {this.props.list.map((pokemon) => {
            return (
              <li className = {`pokemon-item`} key={pokemon.id} onClick = {this.props.clickAction} id = {pokemon.id}>
                <Pokemon 
                zoom = {this.props.zoom}
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
  zoom : PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  clickAction: PropTypes.func.isRequired
}
export default PokeList;