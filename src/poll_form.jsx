import React from 'react';

class PollForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pollQuestion: "",
      options: ["", "", "", ""]
    };

    this.updateQuestion = this.updateQuestion.bind(this);
    this.updateOptions = this.updateOptions.bind(this);
    this.checkValidPoll = this.checkValidPoll.bind(this);
    this.createPoll = this.createPoll.bind(this);
    this.checkOptions = this.checkOptions.bind(this);
  }

  componentDidMount() {
    this.checkValidPoll();
  }

  updateQuestion(e) {
    let pollQuestion = e.target.value;
    this.setState({ pollQuestion }, () => this.checkValidPoll());
    this.checkOptions();
  }

  updateOptions(idx, e) {
    let options = this.state.options;
    options[idx] = e.target.value;
    this.setState({ options }, () => this.checkValidPoll());
    this.checkOptions();
  }

  checkValidPoll() {
    let pollQuestion = this.state.pollQuestion;
    console.log(pollQuestion);
    let options = this.state.options;
    let button = document.getElementById("create-poll");

    if (pollQuestion.length !== 0 && 
        pollQuestion.length < 141 &&
        options[0].length !== 0 &&
        options[1].length !== 0) {
          button.disabled = false;
        } else {
          button.disabled = true;
        }
  }

  createPoll() {
    console.log(this.state);
  }

  checkOptions() {
    let options = this.state.options;
    let optionThree = document.getElementById("option-3");
    let optionFour = document.getElementById("option-4");


    if (options[0].length !== 0 && options[1].length !== 0) {
      optionThree.classList.remove("hidden");
      
      if (options[2].length !== 0) {
        optionFour.classList.remove("hidden");
      }
    } else {
      optionThree.classList.add("hidden");
      optionFour.classList.add("hidden");
    }
  }

  render() {
    return (
      <div className="poll-form-container">
        <section className="instructions">
          Make a Polly by typing a question or rolling the dice to create a random one.
        </section>

        <section className="question">
          <textarea
            autoFocus
            maxLength={140}
            onChange={this.updateQuestion}
            className="poll-question"
            id="pollQuestion"
          >
          </textarea>
        </section>

        <section className="options-container">
          <section className="option option-1">
            <input 
              className="option-input" 
              placeholder="Option..."
              onChange={(e) => this.updateOptions(0, e)}
            />
          </section>
          <section className="option option-2">
            <input
              className="option-input"
              placeholder="Option..."
              onChange={(e) => this.updateOptions(1, e)}
            />
          </section>
          <section className="option option-3 hidden" id="option-3">
            <input
              className="option-input"
              placeholder="Option..."
              onChange={(e) => this.updateOptions(2, e)}
            />
          </section>
          <section className="option option-4 hidden" id="option-4">
            <input
              className="option-input"
              placeholder="Option..."
              onChange={(e) => this.updateOptions(3, e)}
            />
          </section>
        </section>

        <button 
          className="submit-button" 
          id="create-poll"
          onClick={this.createPoll}
        >
          Make My Polly
        </button>
      </div>
    );
  }
}

export default PollForm;