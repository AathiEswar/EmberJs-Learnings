import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking"
import { action } from '@ember/object';

export default class RentalImage extends Component {
  constructor(...args){
    super(...args)
    //this.isLarge = false;
  }
  // like useState
  @tracked isLarge = false;

  // handle the state
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
