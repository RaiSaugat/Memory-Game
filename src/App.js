import React, { Component } from "react";
import aurelia from "./assets/aurelia.svg";
import angular from "./assets/angular.svg";
import backbone from "./assets/backbone.svg";
import ember from "./assets/ember.svg";
import jsBadge from "./assets/js-badge.svg";
import vue from "./assets/vue.svg";
import react from "./assets/react.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.firstCard;
    this.secondCard;
    this.hasFlipped = false;
    this.state = {
      cards: [
        { face: aurelia, name: "aurelia" },
        { face: angular, name: "angular" },
        { face: backbone, name: "backbone" },
        { face: ember, name: "ember" },
        { face: react, name: "react" },
        { face: vue, name: "vue" },
        { face: aurelia, name: "aurelia" },
        { face: angular, name: "angular" },
        { face: backbone, name: "backbone" },
        { face: ember, name: "ember" },
        { face: react, name: "react" },
        { face: vue, name: "vue" }
      ],
      lockBoard: false
    };
  }
  handleClick = e => {
    if (this.state.lockBoard) return;
    if (e.currentTarget === this.firstCard) return;
    e.currentTarget.classList.add("flip");
    if (!this.hasFlipped) {
      this.hasFlipped = true;
      this.firstCard = e.currentTarget;
    } else {
      this.hasFlipped = false;
      this.secondCard = e.currentTarget;

      if (
        this.firstCard.dataset.framework === this.secondCard.dataset.framework
      ) {
        this.resetBoard();
      } else {
        this.setState({
          lockBoard: true
        });
        setTimeout(() => {
          this.firstCard.classList.remove("flip");
          this.secondCard.classList.remove("flip");
          this.resetBoard();
        }, 1500);
      }
    }
  };

  resetBoard() {
    this.hasFlipped = false;
    this.setState({
      lockBoard: false
    });
    this.firstCard = null;
    this.secondCard = null;
  }
  render() {
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <div className="memory-game">
          {this.state.cards.map(e => {
            return (
              <div
                className="memory-card"
                data-framework={e.name}
                onClick={this.handleClick}
              >
                <img className="front-face" src={e.face} alt="Aurelia" />
                <img className="back-face" src={jsBadge} alt="Js Badge" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
