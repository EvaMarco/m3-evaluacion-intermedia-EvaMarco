import React from 'react';
import {List} from './List';
import PokeList from './components/PokeList';
import './scss/main.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: (List),
      zoom: '',
      id: 0
    }
    this.clickZoom = this.clickZoom.bind(this);
  }
  clickZoom(event){
    const itemId = event.currentTarget.id;
    console.log(itemId);
    this.setState((prevState)=>{
      return ({zoom:prevState.zoom === '' ? 'zoom' : '', id: itemId })
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className = 'title'>Mi lista de Pokemon</h1>
        <PokeList 
          zoom = {this.state.zoom}
          list = {this.state.list}
          clickAction = {this.clickZoom}
        />
      </div>
    );
  }
}

export default App;
