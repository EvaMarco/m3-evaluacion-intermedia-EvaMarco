import React from 'react';
import {List} from './List';
import PokeList from './components/PokeList';


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
        <PokeList list = {this.state.list}/>
      </div>
    );
  }
}

export default App;
