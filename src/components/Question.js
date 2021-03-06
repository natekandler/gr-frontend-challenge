import React from 'react';



class Question extends React.Component {
  state = {
    checked: null,
  }

  handleChange = (event) => {
    const {question, updateCorrect, index} = this.props;
    const intIndex = parseInt(index);
  
    if(question.correctChoiceIndex === parseInt(event.target.dataset.index)){
      updateCorrect(intIndex, 1)
    } else  {
      updateCorrect(intIndex, 0)
    }

    const correct = 
    this.setState({
      checked: event.target.value
    })
  }

  generateAnswers(){
    return this.props.question.choices.map((answer, index) => {
      return (
        <div key={answer}>
          <label className="d-block">
            <input type="radio" data-index={index} checked={answer === this.state.checked} value={answer} onChange={this.handleChange}/>
            <div className="label-text">{answer}</div>
        </label>
      </div>
      )
    })
  }

  render () {
    return (
      <div className="card"> 
        <div className="question">Choose the correct meaning of {this.props.question.word}:</div>
        {this.generateAnswers()}
      </div>
    )
  }

}

export default Question;
