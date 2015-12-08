var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./component/todo_list.jsx');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<TodoList/>, document.getElementById('root'));
});
