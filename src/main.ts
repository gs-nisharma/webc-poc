import { LitElement, html, css } from 'lit';
import { customElement, } from 'lit/decorators.js';
import { range } from 'lit/directives/range.js';
import { map } from 'lit/directives/map.js';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './styles';

import "./Components/title-bar";
import "./Components/filters-bar";
import "./Components/engagement-card";

@customElement('px-jo')
export class PxJo extends LitElement {
    static override styles = [styles, css`
     :host{
        display: block;
        margin: 0;
        padding: 0;
      --rich-gray-0: #FFF;
      --rich-gray-90-primary:  #181F26;
      width: 75vw;
      margin: auto;
    }
  `];

    override render() {
        return html`
        <title-bar></title-bar>
        <filters-bar></filters-bar>
        <div style=${styleMap({ display: "flex", flexWrap: "wrap" })}>${map(range(9), () => html`<engagement-card ></engagement-card>`)}</div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'px-jo': PxJo;
    }
}
