/* eslint-disable  no-underscore-dangle */

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // methods
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  // setters
  /**
   * @param {string} code
   */
  set code(code) {
    this._code = code;
  }

  /**
   * @param {string} name
   */
  set name(name) {
    this._name = name;
  }

  // getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }
}
