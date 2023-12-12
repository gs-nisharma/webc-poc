import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from '../styles';

@customElement('engagement-card')
export class EngagementCard extends LitElement {
  static override styles = [
    styles,
    css`
      .engagement-card {
        width: 330px;
        height: 288px;
        flex-shrink: 0;
        border-radius: 4px;
        border: 1px solid var(--rich-gray-30, #e6e9ec);
        background: var(--rich-gray-10, #fbfbfc);
        margin: 16px;
      }
    `,
  ];

  override render() {
    return html`<div class="engagement-card">EngagementCard</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'engagement-card': EngagementCard;
  }
}
