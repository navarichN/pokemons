import React from 'react';
import './App.css';
import {Card} from './components/Card/Card';

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        pokemons: [
          {name: 'bulbasaur', src: './images/green.png', id: 'a'},
          {name: 'pikachu', src: './images/pika.png', id: 'b'},
          {name: 'swarm', src: './images/bee.png', id: 'c'},
          {name: 'bulbasaur', src: './images/bee.png', id: 'd'},
          {name: 'pikachu', src: './images/green.png', id: 'e'},
          {name: 'swarm', src: './images/green.png', id: 'f'},
          {name: 'bulbasaur', src: './images/dragon.png', id: 'g'},
          {name: 'pikachu', src: './images/green.png', id: 'aa'},
          {name: 'swarm', src: './images/green.png', id: 'bb'},
          {name: 'bulbasaur', src: './images/bee.png', id: 'cc'},
          {name: 'pikachu', src: './images/pika.png', id: 'dd'},
          {name: 'pikachu', src: './images/pika.png', id: 'ee'},
          {name: 'pikachu', src: './images/pika.png', id: 'ff'},
          {name: 'pikachu', src: './images/pika.png', id: 'aaa'},
          {name: 'swarm', src: './images/bee.png', id: 'bbb'},
          {name: 'swarm', src: './images/bee.png', id: 'ccc'},
        ],
        title: "Pokemons",
        counter: 0
      }
      this.counterFunc = this.counterFunc.bind(this);
  }
  counterFunc(event){
    if(event.target.innerText === "ПОЙМАТЬ"){
      this.setState((state) => {
        return {counter: state.counter + 1};
      })
    } else if(event.target.innerText === "ОТПУСТИТЬ"){
      this.setState((state) => {
        return {counter: state.counter - 1};
      })
    }
    return this.state.counter
  }

  render(){
    let pokemons = this.state.pokemons

    return (
      <div className="app">
        <h1>Поймано покемонов</h1>
        <span className = "counter">{this.state.counter}/{pokemons.length}</span>
        <div className="cards" onClick={this.counterFunc}>
          {pokemons.map((el, index) => {
            return(
              <div>
                <Card name = {el.name} src = {el.src} key = {el.name + index}/> 
                {/* почему-то не работает key */}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
