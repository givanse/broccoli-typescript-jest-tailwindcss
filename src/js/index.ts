
export default class Foobar {

  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  start() {}

  stop(): boolean {
    return false;
  }
  
}