import {ExcelComponent} from '../../core/ExcelComponent';


export class Formula extends ExcelComponent {
  className() {
    return 'excel__formula'
  }

  toHtml() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable="true" spellcheck="false"></div>
    `
  }
}