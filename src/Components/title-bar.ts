import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from '../styles';

@customElement('title-bar')
export class TitleBar extends LitElement {
    static override styles = [styles, css`
    
        .title-bar{background-color: var(--rich-gray-0, #FFF);
        border-bottom: 1px solid var(--rich-gray-40, #D5D9DE);
        display: flex;
        padding: 12px 0px;
        align-items: center;
        justify-content: space-between; 
        }
        .title{
            color: var(--rich-gray-90-primary, #181F26);
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
        } 
    
  `];

    override render() {
        return html`<div class="title-bar">
                <p class='title'>Active Engagements</p><search-comp>A Search Componenet</search-comp>
                </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'title-bar': TitleBar;
    }
}
