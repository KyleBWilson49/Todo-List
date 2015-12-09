var React = require('react');
var StepStore = require('../stores/step_store.js');
var StepForm = require('./step_form.jsx');
var StepDetail = require('./step_item.jsx');

var Steps = React.createClass ({
  getInitialState: function () {
    return ({ steps: StepStore.all(this.props.todoId) });
  },

  stepsChanged: function () {
    this.setState({
      steps: StepStore.all(this.props.todoId)
    });
  },

  componentDidMount: function () {
    StepStore.addChangedHandler(this.props.todoId, this.stepsChanged);
    StepStore.fetch(this.props.todoId);
  },

  componentWillUnmount: function () {
    StepStore.removeChangedHandler(this.props.todoId, this.stepsChanged);
  },



  render: function () {
    var steps = this.state.steps.map(function (step, idx) {
      return (
        <StepDetail key={idx}
                    step={step}
                    stepBody={(idx+1) + ") " + step.step_body}
        />
      );
    }.bind(this));
    return (
      <div>
        {steps}
        <br/>
        <StepForm todoId={this.props.todoId}/>
      </div>
    );
  }
});

module.exports = Steps;
