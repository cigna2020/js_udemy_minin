export class Excel {
  constructor(selector, options) {
    this.$elem = document.querySelector(selector);
    this.components = options.components || []
  }

  // возвращает корневую ноду для Excel
  getRoot() {
    const $root = document.createElement('div');
    $root.classList.add('excel');

    // Получаем доступ до каждого компонента  [Header, Toolbar, Formula, Table]
    this.components.forEach(Component => {
      const $elem = document.createElement('div')
      const component = new Component($elem);
      $root.insertAdjacentHTML('beforeend', component.toHtml());
    })

    return $root;
  }

  render() {
    this.$elem.append(this.getRoot());
  }
}