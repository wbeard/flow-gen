// @flow
import * as Immutable from 'immutable';

export default class ImmutableModel {
  state: Immutable.Map<string, any>;

  constructor(state: ?Immutable.Map<string, any>) {
    this.state = state || this.initialize();
  }

  clone(value: Immutable.Map<string, any>): this {
    const constructor = this.constructor;
    return value === this.state ? this : new constructor(value);
  }

  initialize() {
    return Immutable.Map();
  }

  get(property: string) {
    return this.state.get(property);
  }

  set(property: string, value: any): this {
    return this.clone(this.state.set(property, value));
  }
}
