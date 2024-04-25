/* eslint-disable  no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // Type checking
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency object');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency object');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} ${this._currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
