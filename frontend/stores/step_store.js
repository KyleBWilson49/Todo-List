var _steps = {};
var _callbacks = {};

var StepStore = {
  remove: function(todoId) {
    delete(_steps[todoId]);
    delete(_callbacks[todoId]);
  },

  changed: function (todoId) {
    _callbacks[todoId].forEach(function (cb) {
      cb();
    });
  },

  addChangedHandler: function (todoId, cb) {
    if (_steps[todoId]) {
      _callbacks[todoId].push(cb);
    } else {
      _callbacks[todoId] = [cb];
    }

  },

  removeChangedHandler: function (todoId, cb) {
    for (var i = 0; i < _callbacks[todoId].length; i++) {
      if(_callbacks[todoId][i] === cb) {
        var idx = i;
        break;
      }
    }

    _callbacks[todoId].splice(idx, 1);
  },

  all: function (todoId) {
    if (_steps[todoId]) {
      return _steps[todoId].slice();
    } else {
      return [];
    }
  },

  fetch: function (todoId) {
    $.get('api/todos/' + todoId + '/steps', {}, function (steps) {
      _steps[todoId]= steps;
      StepStore.changed(todoId);
    });
  },

  create: function (todoId, data) {
    $.post('api/todos/' + todoId + '/steps', {step: data}, function (st) {
      _steps[todoId].push(st);
      StepStore.changed(todoId);
    });
  },

  destroy: function (todoId, id) {
    for (var i = 0; i < _steps[todoId].length; i++) {
      if(_steps[todoId][i].id === id) {
        var idx = i;
        break;
      }
    }
    $.ajax({
      url :'api/steps/' + id,
      type: 'DELETE',
      success: function () {
        _steps[todoId].splice(idx, 1);
        StepStore.changed(todoId);
      }
    });
  },

  toggleDone: function (todoId, id) {
    for (var i = 0; i < _steps[todoId].length; i++) {
      if(_steps[todoId][i].id === id) {
        var idx = i;
        var currentStep = _steps[todoId][i];
        break;
      }
    }

    $.ajax({
      url: 'api/steps/' + id,
      type: 'PATCH',
      data: { step: { step_done: !currentStep.step_done }},
      success: function () {
        currentStep.step_done = !currentStep.step_done;
        StepStore.changed(todoId);
      }
    });
  }
};

module.exports = StepStore;
