var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from '../styles';
let EngagementCard = class EngagementCard extends LitElement {
    render() {
        return html `<div class="engagement-card">
                        EngagementCard
                    </div>
        `;
    }
};
EngagementCard.styles = [styles, css `
    
        .engagement-card{
            width: 340px;
            height: 288px;
            flex-shrink: 0;
            border-radius: 4px;
            border: 1px solid var(--rich-gray-30, #E6E9EC);
            background: var(--rich-gray-10, #FBFBFC);
            margin: 16px;
        }
    
  `];
EngagementCard = __decorate([
    customElement('engagement-card')
], EngagementCard);
export { EngagementCard };
//# sourceMappingURL=engagement-card.js.map