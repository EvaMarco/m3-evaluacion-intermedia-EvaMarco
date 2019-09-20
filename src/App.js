import React from 'react';
import {List} from './List';
import PokeList from './components/PokeList';
import './scss/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: (List),
      id: null
    }
    this.zoomItem = this.zoomItem.bind(this);
  }
  zoomItem(event) {
    const item = parseInt(event.currentTarget.id);  
    this.setState(prevState=>{
      if(prevState.id === null){
        return {id:item}
      }
      else{
        return {id:null}
      }
    }
 
    );
  }
  render() {
    return (
      <div className="App">
        <h1 className = 'title'>Mi lista de Pokemon</h1>
        <PokeList 
          list = {this.state.list}
          clickAction = {this.zoomItem}
          id = {this.state.id}
        />
      </div>
    );
  }
}

export default App;
