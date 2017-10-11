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
  }

  updateQuestion(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  updateOptions(idx, e) {
    let options = this.state.options;
    options[idx] = e.target.value;
    this.setState({ options });
    console.log(this.state);
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
            value={this.state.pollQuestion}
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
          <section className="option option-3 hidden">
            <input
              className="option-input"
              placeholder="Option..."
              onChange={(e) => this.updateOptions(2, e)}
            />
          </section>
          <section className="option option-4 hidden">
            <input
              className="option-input"
              placeholder="Option..."
              onChange={(e) => this.updateOptions(3, e)}
            />
          </section>
        </section>

        <button className="submit-button" disabled>Make My Polly</button>
      </div>
    );
  }
}

export default PollForm;