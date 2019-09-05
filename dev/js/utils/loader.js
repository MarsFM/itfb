export class Loader {
  constructor(elem) {
    this.elem = elem;
    this.message = document.createElement('div');
    this.message.classList.add('loader');
  }

  start() {
    this.message.innerHTML = 'Идёт загрузка...';
    this.elem.append(this.message);
  }

  stop() {
    this.message.remove();
  }
}
