import React from 'react';

import data from '../data';
import Question from './Question';
import '../quiz.css';

class App extends React.Component {
  state = {
    correct: []
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
        updateCorrect={this.updateCorrect}
      />
    })
  }

  generateScore() {
    this.state.correct.reduce((sum, item) => {
      return sum += item
    },0)
  }
  
  percentAnswered() {
    const value = this.state.answered.length / data.length * 100 || 2
    return `${(value)}%`;
  }

  renderInfo() {
    return (
      <div>
        Your score: {this.generatescore()}
        <hr/ >
        Your Progress:
        <div className='progress-bar-outer'>
          <div className='progress-bar-inner' id='quizProgressBar' style={{'width': this.percentAnswered()}}></div>
        </div>
     </div>
    )
  }

  render(){
    return (
    <div className='container'>
      <h1 className="title">Abstruse Verbiage</h1>
      <div className='quiz-info mobile-info'>
        {this.renderInfo()}
      </div>
      <div className="card-col">
        <form>
          {this.renderQuestions()}
          <div className="button-wrapper"> 
            <input type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
      <div className="desktop-info">
        <div className="quiz-info">
          {this.renderInfo()}
        </div>
      </div>
      
    </div>
    )
  }
}

export default App;