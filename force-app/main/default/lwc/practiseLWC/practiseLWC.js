import { LightningElement } from "lwc";

export default class MyLightingCompound extends LightningElement {
  count = 0;
  handleIncrement(event) {
    this.count = this.count + 1;
  }
   handleDecrement(event) {
    if (this.count > 0) {
        this.count--;
    }
  }
  //message = "";
  get message() {
    return this._message;
  }
  set message(value) {
    this._message = value;
  }
  TakeInput(event) {
    this.message = event.target.value;
  }
}