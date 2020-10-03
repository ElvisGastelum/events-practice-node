const { capitalizeFirstLetter } = require('../util');

/**
 * Instance of Event Emitter
 *
 */
function EventEmitter() {
  this.events = {};
}

/**
 * Used for register events
 *
 * @param {String} type - Name of the event to listen
 * @param {Function} listener - Action to dispatch when event is throw
 */
EventEmitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

/**
 * Used for simulate events
 *
 * @param {String} type - Name of the event to simulate emit
 */
EventEmitter.prototype.emit = function (type) {
  const event = this.events[type];
  var result = [];

  if (!event) throw new Error('Event not exists');

  event.forEach((listener) => {
    let event = {
      message: `on${capitalizeFirstLetter(type)} Event Emitted`,
    };

    result = [...result, listener(event)];
  });

  return result;
};

module.exports = {
  EventEmitter,
};
