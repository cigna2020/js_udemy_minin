import {ExcelComponent} from '../../core/ExcelComponent';

// const className = 'excel__header';


export class Header extends ExcelComponent {
  toHtml() {
    return '<h1>Header</h1>'
  }
}