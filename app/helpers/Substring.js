import Helper from '@ember/component/helper';

export default class ToUpperCaseHelper extends Helper {
  compute(positional, { start, end }) {
    return positional.toUpperCase();
  }
}