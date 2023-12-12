import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {range} from 'lit/directives/range.js';
import {map} from 'lit/directives/map.js';
import {styleMap} from 'lit/directives/style-map.js';
import styles from './styles';

import './components/Header';
import './components/TitleBar';
import './components/FiltersBar';
import './components/EngagementCard';

@customElement('px-jo')
export class PxJo extends LitElement {
  static override styles = [
    styles,
    css`
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
  override render() {
    return html`
      <header-wc></header-wc>
      <div class="container">
        <title-bar></title-bar>
        <filters-bar></filters-bar>
        <div style=${styleMap({display: 'flex', flexWrap: 'wrap'})}>
          ${map(range(9), () => html`<engagement-card></engagement-card>`)}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'px-jo': PxJo;
  }
}
