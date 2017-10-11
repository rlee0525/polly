import React from 'react';

class PollForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pollQuestion: "",
      options: []
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
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
            onChange={this.updateState}
            className="poll-question"
            id="pollQuestion"
          >
          </textarea>
        </section>

        <section className="options-container">
          <section className="option">
            <input className="option-input" placeholder="Option..." />
          </section>
          <section className="option">
            <input className="option-input" placeholder="Option..." />
          </section>
        </section>

        <button className="submit-button" disabled>Make My Polly</button>
      </div>
    );
  }
}

export default PollForm;