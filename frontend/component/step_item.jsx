var React = require('react');
var StepStore = require('../stores/step_store.js');

var StepDetail = React.createClass({
  handleDestroy: function () {
    StepStore.destroy(this.props.step.todo_id, this.props.step.id);
  },

  handleDone: function() {
    StepStore.toggleDone(this.props.step.todo_id, this.props.step.id);
  },

  render: function() {
    var doneButton;

    if (!this.props.step.step_done) {
      doneButton = (
          <button onClick={this.handleDone}>
            Done
          </button>
      );
    } else {
      doneButton = "";
    }

    return (
      <div>
        <div>{this.props.stepBody}</div>
        <button onClick={this.handleDestroy}>Delete</button>
        {doneButton}
      </div>
    );
  }
});

module.exports = StepDetail;
