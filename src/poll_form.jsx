import React from 'react';

class PollForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pollQuestion: "",
      options: []
    };
  }

  render() {
    return (
      <div className="poll-form-container">
        <section className="instructions">
          Make a Polly by typing a question or rolling the dice to create a random one.
        </section>
        <section>
          <textarea className="poll-question"></textarea>
        </section>
      </div>
    );
  }
}

export default PollForm;