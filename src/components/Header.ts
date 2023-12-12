import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from '../styles';
import {SELECT_PX_ENGAGEMENT} from '../text';

@customElement('header-wc')
export class Header extends LitElement {
  static override styles = [
    styles,
    css`
      .header {
        padding: 16px;
        border-bottom: 1px solid var(--rich-gray-30, #e6e9ec);
        background: var(--rich-gray-0, #fff);
        display: flex;
        justify-content: space-between;
      }
      #title {
        font-family: Noto Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        color: var(--rich-gray-90-primary, #181f26);
      }
    `,
  ];

  override render() {
    return html`<div class="header">
      <div id="title">${SELECT_PX_ENGAGEMENT}</div>
      <div id="cancel">
        <img id="cancel" src="../assets/cancel.svg" />
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'header-wc': Header;
  }
}
