var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from '../styles';
let TitleBar = class TitleBar extends LitElement {
    render() {
        return html `<div class="title-bar">
                <p class='title'>Active Engagements</p><search-comp>A Search Componenet</search-comp>
                </div>
        `;
    }
};
TitleBar.styles = [styles, css `
    
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
TitleBar = __decorate([
    customElement('title-bar')
], TitleBar);
export { TitleBar };
//# sourceMappingURL=title-bar.js.map