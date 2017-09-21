import {EventEmitter} from '../src/eventEmitter';
let evEmitter;

describe('event emitter', function() {
  beforeEach(function() {
    evEmitter = new EventEmitter();
  });
  it('should have empty listerns', function() {
    expect(evEmitter.listeners.size).toEqual(0);
  });

  it('should listen to event', function() {
    let message = '';
    const callback = () => {
      message = 'i\'m listening';
    }
    evEmitter.addListener('hey-yo', callback);
    evEmitter.emit('hey-yo');
    expect(message).toEqual('i\'m listening');
  });

  it('should remove the listener', function() {
    let message = '';
    const callback = () => {
      message = 'i\'m listening';
    }
    evEmitter.addListener('hey-yo', callback);
    evEmitter.emit('hey-yo');
    expect(message).toEqual('i\'m listening');
    message = '';
    evEmitter.removeListener('hey-yo', callback);
    evEmitter.emit('hey-yo');
    expect(message).toEqual('');
  });
  it('should not add non-function the listener', function() {
    const callback = {};
    let result = evEmitter.addListener('hey-yo', callback);
    expect(result).toEqual(false);
  });
  it('should not add non-string event the listener', function() {
    let result = evEmitter.addListener();
    expect(result).toEqual(false);
  });
  it('should not remove non-function callback form listener', function() {
    const callback = {};
    let result = evEmitter.removeListener('hey-yo', callback);
    expect(result).toEqual(false);
  });
  it('should not remove non-string eventname form listener', function() {
    let result = evEmitter.removeListener();
    expect(result).toEqual(false);
  });
  it('should not emit non-string eventname', function() {
    let result = evEmitter.emit();
    expect(result).toEqual(false);
  });
  it('should not emit non-existed eventname', function() {
    let result = evEmitter.emit('non');
    expect(result).toEqual(false);
  });
});
