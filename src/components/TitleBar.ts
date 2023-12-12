import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from '../styles';
import {ACTIVE_ENGAGEMENTS} from '../text';

@customElement('title-bar')
export class TitleBar extends LitElement {
  static override styles = [
    styles,
    css`
      .title-bar {
        background-color: var(--rich-gray-0, #fff);
        border-bottom: 1px solid var(--rich-gray-40, #d5d9de);
        display: flex;
        padding: 12px 0px;
        align-items: center;
        justify-content: space-between;
      }
      .title {
        color: var(--rich-gray-90-primary, #181f26);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
      }
    `,
  ];

  override render() {
    return html`<div class="title-bar">
      <p class="title">${ACTIVE_ENGAGEMENTS}</p>
      <search-comp>A Search Componenet</search-comp>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'title-bar': TitleBar;
  }
}
