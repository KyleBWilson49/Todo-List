var React = require('react');
var StepStore = require('../stores/step_store.js');

var StepForm = React.createClass({
  getInitialState: function () {
      return {step_body: ""};
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var newStep = {
      step_body: e.target.step_body.value,
      todo_id: this.props.todoId
    };

    StepStore.create(this.props.todoId, newStep);

    this.setState({
      step_body: ""
    });
  },

  handleInput: function (e) {
    this.setState({ step_body:  e.target.value });
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea name='step_body'
                  onChange={this.handleInput}
                  value={this.state.step_body}
                  placeholder="step description">
        </textarea>

        <br/>

        <input type="submit" value="Create Step!"></input>
      </form>
    );
  }
});

module.exports = StepForm;
