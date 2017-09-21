
export class EventEmitter{
  constructor(){
    this.listeners = new Map();
  }
  _isFunction(fn){
    return typeof fn==='function' || false;
  }
  addListener(eventname, callback){
    if(typeof eventname !== 'string' || !this._isFunction(callback) ){
      return false;
    }
    if(!this.listeners.get(eventname)) {
      this.listeners.set(eventname, []);
    }
    this.listeners.get(eventname).push(callback);
    return true;
  }

  removeListener(eventname, callback){
    if(typeof eventname !== 'string' || !this._isFunction(callback) ){
      return false;
    }
    let listeners = this.listeners.get(eventname);
    let index;
    if(!listeners || listeners.length === 0) {
      return false;
    }
    index = listeners.reduce((i, listener, index)=>{
      return this._isFunction(listener) && listener === callback?i=index:i;
    },-1);

    if (index > -1){
      let _listeners = listeners.splice(index,1);
      this.listeners.set(_listeners);
      return true;
    }
    else{
      return false;
    }
  }

  emit(eventname, ...args){
    if(typeof eventname !== 'string'){
      return false;
    }
    let listeners = this.listeners.get(eventname);
    if(!listeners || !listeners.length === 0){
      return false;
    }
    listeners.forEach((listener)=>{
      listener(...args);
    })
    return true;
  }
}
