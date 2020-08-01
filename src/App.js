import React from 'react';
import './App.css';
import {Card} from './components/Card/Card'

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        pokemons: [
          {name: 'bulbasaur', src: './images/green.png'},
          {name: 'pikachu', src: './images/pika.png'},
          {name: 'swarm', src: './images/bee.png'},
          {name: 'bulbasaur', src: './images/bee.png'},
          {name: 'pikachu', src: './images/green.png'},
          {name: 'swarm', src: './images/green.png'},
          {name: 'bulbasaur', src: './images/dragon.png'},
          {name: 'pikachu', src: './images/green.png'},
          {name: 'swarm', src: './images/green.png'},
          {name: 'bulbasaur', src: './images/bee.png'},
          {name: 'pikachu', src: './images/pika.png'},
          {name: 'pikachu', src: './images/pika.png'},
          {name: 'pikachu', src: './images/pika.png'},
          {name: 'pikachu', src: './images/pika.png'},
          {name: 'swarm', src: './images/bee.png'},
          {name: 'swarm', src: './images/bee.png'},
        ],
        title: "Pokemons"
      }
  }

  render(){
    let pokemons = this.state.pokemons

    return (
      <div className="app">
        <h1>Поймано покемонов</h1>
        <div className="cards">
          {pokemons.map((el, index) => {
            return(
              <Card name = {el.name} src = {el.src} key = {index}/>
            )
          })}
        </div>
        
      </div>
    )
  }


}

export default App;
