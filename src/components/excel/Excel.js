export class Excel {
  constructor(selector, options) {
    this.$elem = document.querySelector(selector);
    this.components = options.components || []
  }
  render() {
    // beforebegin, afterbegin, beforeend, afterend, insertAdjacentHTML(position, text - html)
    // this.$elem.insertAdjacentHTML('afterbegin', '<h1>Test</h1>')

    const node = document.createElement('h1');
    node.textContent = 'TEST!';
    this.$elem.append(node);
  }
}