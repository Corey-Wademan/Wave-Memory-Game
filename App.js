import React from 'react';
import { Card } from './Components/Card';
import './App.css';
import { Jumbotron } from './Components/Jumbotron';
import {cards} from './Components/Cards';
import {Wrapper} from './Components/Wrapper'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards,
      name: '',
      location: '',
      src: '',
      clicked: false,
      currentScore: 0,
      topScore: 0,
    }
  }
 
  // handles click function
  handleClick = (id) => {
    this.shuffle();
    this.handleScore(id);
  };

  // handles score and top score
  handleScore = (id) => {
    this.state.cards.forEach(wave => {
      if (id === wave.id && wave.clicked === false) {
        wave.clicked = true;
        this.setState({currentScore: this.state.currentScore + 1})
      } else if (id === wave.id && wave.clicked === true) {
         if (this.state.currentScore > this.state.topScore) {
           this.setState({topScore: this.state.currentScore})
         }
        this.setState({currentScore: 0});
        this.state.cards.forEach(wave => wave.clicked === false);
      }
    })
  };

  // shuffles array
  handleShuffle(array) {
    let currentIndex = array.length 
    let tempIndex; 
    let randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex --;

      tempIndex = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempIndex;
    }
    return array;
  };

  // assigns shuffled array as state to game
  shuffle() {
    const shuffledArray = this.handleShuffle(this.state.cards)
    this.setState({shuffledArray})
  }; 





render() {
  return (
    <Wrapper>
      <Jumbotron currentScore={this.state.currentScore} topScore={this.state.topScore}/>
      <div className='card-container'>
      {this.state.cards.map(wave => (
        <Card 
          handleClick={this.handleClick}
          name={wave.name}
          location={wave.location}
          src={wave.src}
          clicked={wave.clicked}
          id={wave.id}
          key={wave.id}
        />
      ))}
      </div>
    </Wrapper>
  );
}
}

export default App;
