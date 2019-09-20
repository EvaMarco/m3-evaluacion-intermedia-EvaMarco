import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {

  render(){
    return(
      <div className='card'>
      <div className = "img-div">
        <img src={this.props.pokeUrl} alt={this.props.pokeName} className = "image"/>
      </div>
      <p className='name-text'>{this.props.pokeName}</p>
      <ul className="types-list">
        {this.props.pokeTypes.map(
          (type, index)=>{
            return (
              <li className = 'type' key={index}>
                <div className="type-div">
                  <p>
                    {type}
                  </p>
                </div>
              </li>
            )
          }
        )}
      </ul>
    </div>
    )
  }
}
Pokemon.propTypes = {
  pokeUrl : PropTypes.string.isRequired,
  pokeName : PropTypes.string.isRequired,
  pokeTypes : PropTypes.array.isRequired,

}

export default Pokemon;