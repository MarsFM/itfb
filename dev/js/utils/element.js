export class Element {
  constructor(type) {
    this.type = type;
    this.elem = document.createElement(this.type);
  }

  addClass(name) {
    this.elem.classList.add(name);
  }

  addText(text) {
    this.elem.innerHTML = text;
  }

  setAttr(key, value) {
    this.elem.setAttribute(key, value);
  }

  setInside(block) {
    block.append(this.elem);
  }

  render() {
    return this.elem;
  }
}
