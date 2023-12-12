var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { range } from 'lit/directives/range.js';
import { map } from 'lit/directives/map.js';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './styles';
import './components/Header';
import './components/TitleBar';
import './components/FiltersBar';
import './components/EngagementCard';
let PxJo = class PxJo extends LitElement {
    render() {
        return html `
      <header-wc></header-wc>
      <div class="container">
        <title-bar></title-bar>
        <filters-bar></filters-bar>
        <div style=${styleMap({ display: 'flex', flexWrap: 'wrap' })}>
          ${map(range(9), () => html `<engagement-card></engagement-card>`)}
        </div>
      </div>
    `;
    }
};
PxJo.styles = [
    styles,
    css `
      :host {
        display: block;
        margin: 0;
        padding: 0;
        --rich-gray-0: #fff;
        --rich-gray-90-primary: #181f26;
      }
      .container {
        width: 75%;
        margin: auto;
      }
    `,
];
PxJo = __decorate([
    customElement('px-jo')
], PxJo);
export { PxJo };
//# sourceMappingURL=main.js.map