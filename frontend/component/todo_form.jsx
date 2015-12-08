var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoForm = React.createClass({
  getInitialState: function () {
      return {title: "", body: ""};
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var newTodo = {
      title: e.target.title.value,
      body: e.target.body.value
    };

    TodoStore.create(newTodo);

    this.setState({
      title: "",
      body: ""
    });
  },

  handleInput: function (e) {
    this.setState({ [e.target.name]:  e.target.value });
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text'
               name='title'
               onChange={this.handleInput}
               value={this.state.title}
               placeholder="Title">
        </input>

        <br/>

        <textarea name='body'
                  onChange={this.handleInput}
                  value={this.state.body}
                  placeholder="description">
        </textarea>

        <br/>

        <input type="submit" value="Create Todo!"></input>
      </form>
    );
  }
});

module.exports = TodoForm;
