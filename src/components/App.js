import React from 'react';

import data from '../data';
import Question from './Question';
import '../quiz.css';

class App extends React.Component {
  state = {
    answered: 0,
    correct: []
  }

  updateAnswered = (answered) => {
    let currentAnswered = this.state.answered;
    this.setState({
      answered: currentAnswered += answered,
    })
    
  }
  updateCorrect = (index, value) => {
    let currentCorrect = this.state.correct;
    const newCorrect = currentCorrect[index] = value
    this.setState({currentCorrect: newCorrect})
  }

  renderQuestions() {
    return data.map((item, index) => {
      return <Question 
        key={item.word} 
        question={item} 
        index={index}
        updateAnswered={this.updateAnswered} 
        updateCorrect={this.updateCorrect}
      />
    })
  }

  generateScore() {
    return this.state.correct.reduce((sum, item) => {
      return sum += item
    },0)
  }
  
  percentAnswered() {
    return `${(this.state.answered / data.length) * 100}%`;
  }

  render(){
    return (
    <div className='container'>
      <h1>Abstruse Verbiage</h1>
      <div className='quiz-info'>
        Your score: {this.generateScore()}
        <hr/ >
        Your Progress:
        <div className='progress-bar-outer'>
          <div className='progress-bar-inner' id='quizProgressBar' style={{'width': this.percentAnswered()}}></div>
        </div>
      </div>
      {this.renderQuestions()}
    </div>
    )
  }
}

export default App;