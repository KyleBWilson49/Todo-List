var _todos = [];
var _callbacks = [];

var TodoStore = {
  changed: function () {
    _callbacks.forEach(function (cb) {
      cb();
    });
  },

  addChangedHandler: function (cb) {
    _callbacks.push(cb);
  },

  removeChangedHandler: function (cb) {
    for (var i = 0; i < _callbacks.length; i++) {
      if(_callbacks[i] === cb) {
        var idx = i;
        break;
      }
    }

    _callbacks.splice(idx, 1);
  },

  all: function () {
    return _todos.slice();
  },

  fetch: function () {
    $.get('api/todos', {}, function (todos) {
      _todos = todos;
      TodoStore.changed();
    });
  },

  create: function (data) {
    $.post('api/todos', {todo: data}, function (td) {
      _todos.push(td);
      TodoStore.changed();
    });
  },

  destroy: function (id) {
    for (var i = 0; i < _todos.length; i++) {
      if(_todos[i].id === id) {
        var idx = i;
        break;
      }
    }
    $.ajax({
      url :'api/todos/' + id,
      type: 'DELETE',
      success: function () {
        _todos.splice(idx, 1);
        TodoStore.changed();
      }
    });
  },

  toggleDone: function (id) {
    for (var i = 0; i < _todos.length; i++) {
      if(_todos[i].id === id) {
        var idx = i;
        var currentTodo = _todos[i];
        break;
      }
    }

    $.ajax({
      url: 'api/todos/' + id,
      type: 'PATCH',
      data: { todo: { done: !currentTodo.done }},
      success: function () {
        currentTodo.done = !currentTodo.done;
        TodoStore.changed();
      }
    });
  }
};

module.exports = TodoStore;
