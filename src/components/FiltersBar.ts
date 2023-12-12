import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from '../styles';

@customElement('filters-bar')
export class FiltersBar extends LitElement {
  static override styles = [
    styles,
    css`
      .filters-bar {
        border-bottom: 1px solid var(--rich-gray-40, #d5d9de);
        background: var(--rich-gray-0, #fff);
        display: flex;
        padding: 16px 0px;
        align-items: flex-start;
        width: 100%;
      }
      .filters {
        width: 200px;
        height: 24px;
      }
    `,
  ];

  override render() {
    return html`<div class="filters-bar">
      <div class="filters">A</div>
      <div class="filters">B</div>
      <div class="filters">C</div>
      <div class="filters">D</div>
      <div class="filters">E</div>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'filters-bar': FiltersBar;
  }
}
