import React from 'react';
import './Card.css';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: true,
          src: props.src,
          name: props.name,
          counter: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
      if(this.state.isToggleOn){
        event.currentTarget.className = 'card card_red'
      } else {
        event.currentTarget.className = 'card'
      }
    }

    render() {
      return (
        <div className="card" onClick = {this.handleClick}>
            <h3 className="card__title">{this.state.name}</h3>
            <img src = {this.state.src} width = "96px" height = "96px" className="card__img" alt = "pokemon"/>
            <button className = "card__btn">
                {this.state.isToggleOn ? 'ПОЙМАТЬ' : 'ОТПУСТИТЬ'}
            </button>
        </div>
      );
    }
}