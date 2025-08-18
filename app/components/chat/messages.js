import Component from '@glimmer/component';

export default class Message extends Component {
  substring = (string, options) => string.substring(options.start, options.end);
}