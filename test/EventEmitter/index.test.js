const { EventEmitter } = require('../../src/EventEmitter');

describe('Testing EventEmitter', () => {
  var eventEmitter;

  beforeEach(() => {
    eventEmitter = new EventEmitter();
  });

  test('should reutrn "onChange Event Emitted" when emit "change" event', () => {
    eventEmitter.on('change', (event) => {
      return event.message;
    });

    const [result] = eventEmitter.emit('change');

    expect(result).toBe('onChange Event Emitted');
  });

  test('should reutrn the two values returned on callback when emit "change" event from two register listeners', () => {
    eventEmitter.on('change', (event) => {
      return event.message;
    });

    eventEmitter.on('change', () => {
      return "hello i'm the second listener";
    });

    const [firstResult, secondResult] = eventEmitter.emit('change');

    expect(firstResult).toBe('onChange Event Emitted');
    expect(secondResult).toBe("hello i'm the second listener");
  });

  test('should have empty object from instance without register events', () => {
    const result = eventEmitter.events;

    expect(result).toStrictEqual({});
  });

  test('should have object with property save when register "save" event', () => {
    eventEmitter.on('save', () => {});

    const result = eventEmitter.events;
    expect(result).toHaveProperty('save');
  });

  test('should not have object with property save when register "change" event', () => {
    eventEmitter.on('change', () => {});

    const result = eventEmitter.events;
    expect(result).not.toHaveProperty('save');
  });

  test('should throw Error "Event not exists" when try emit an event witout register before', () => {
    var result;
    try {
      eventEmitter.emit('change');
    } catch (error) {
      result = error.message;
    }

    expect(result).toBe('Event not exists');
  });
});
