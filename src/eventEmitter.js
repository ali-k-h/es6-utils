
export class EventEmitter{
  constructor(){
    this.listeners = new Map()

  }
  _isFunction(fn){
    return typeof fn==='function' || false
  }
  addListener(eventname, callback){
    if(!this.listeners.get(eventname)) this.set(eventname, [])
    this.get(eventname).push(callback)
  }
  removeListener(eventname, callback){
    let listeners = this.listeners.get(eventname)
    let index
    if(!listeners || listeners.length === 0) return false

    index = listeners.reduce((i, listener, index)=>{
      return _isFunction(listener) && listener === callback?i=index:i
    },-1)

    if (index > -1){
      listeners.slice(index,1)
      this.listeners.set(eventname).push(listeners)
      return true
    }
    return false
  }

  emit(eventname, ...args){
    let listeners = this.listeners.get(eventname)
    if(!listeners || !listeners.length === 0) return false
    listeners.forEach((listener)=>{
      listener(...args)
      return true
    })
  }
}
