import {$} from '../../core/dom';

export class Excel {
  constructor(selector, options) {
    this.$elem = document.querySelector(selector);
    this.components = options.components || []
  }

  // возвращает корневую ноду для Excel
  getRoot() {
    const $root = $.create('div', 'excel');
    // const $root = document.createElement('div');
    // $root.classList.add('excel');

    // Получаем доступ до каждого компонента  [Header, Toolbar, Formula, Table]
    this.components.forEach(Component => {
      const $el = document.createElement('div')
      const component = new Component($el);
      $el.innerHTML = component.toHtml();
      $el.classList.add(component.className());
      $root.append($el);
    })

    return $root;
  }

  render() {
    this.$elem.append(this.getRoot());
  }
}