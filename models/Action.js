
  import * as Immutable from 'immutable';

  class Action {
    constructor() {
      this.data = Immutable.Map();
    }

    
    get type(): string { return this.data.get(type) }
    settype(value: string): { return this.data.set(type, value) }
  
    get payload(): ?Object { return this.data.get(payload) }
    setpayload(value: ?Object): { return this.data.set(payload, value) }
  
    get meta(): any { return this.data.get(meta) }
    setmeta(value: any): { return this.data.set(meta, value) }
  
  }
  