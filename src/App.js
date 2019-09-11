import React from 'react';
import {List} from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: (List)
    }
  }

  render() {
    return (
      <div className="App">
        <ul className="pokeList">
          {this.state.list.map((pokemon) => {
        return (
          <li className = 'pokemon-item' key={pokemon.id}>
            <div className="card">
              <div className = "img-div">
                <img src={pokemon.url} alt={pokemon.name} className = "image"/>
              </div>
              <p className='name-text'>{pokemon.name}</p>
              <ul className="types-list">
                {pokemon.types.map(
                  (type)=>{
                    return (
                      <li className = 'Type'>
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
          </li>
        );
      })}

        </ul>
      </div>
    );
  }
}

export default App;
