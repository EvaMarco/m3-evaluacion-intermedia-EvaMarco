import React from 'react';

class Pokemon extends React.Component {
  render(){
    return(
      <div className="card">
      <div className = "img-div">
        <img src={this.props.pokeUrl} alt={this.props.pokeName} className = "image"/>
      </div>
      <p className='name-text'>{this.props.pokeName}</p>
      <ul className="types-list">
        {this.props.pokeTypes.map(
          (type, index)=>{
            return (
              <li className = 'Type' key={index}>

                    {type}

              </li>
            )
          }
        )}
      </ul>
    </div>
    )
  }
}

export default Pokemon;