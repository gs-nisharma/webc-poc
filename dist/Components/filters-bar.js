var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from '../styles';
let FiltersBar = class FiltersBar extends LitElement {
    render() {
        return html `<div class="filters-bar">
                    <div class="filters" >A</div>
                    <div class="filters" >B</div>
                    <div class="filters" >C</div>
                    <div class="filters" >D</div>
                    <div class="filters" >E</div>
                </div>
        `;
    }
};
FiltersBar.styles = [styles, css `
    .filters-bar{
        border-bottom: 1px solid var(--rich-gray-40, #D5D9DE);
        background: var(--rich-gray-0, #FFF);
        display: flex;
        padding: 16px 0px;
        align-items: flex-start;
        width: 100%;
    }
    .filters{
        width: 200px;
        height: 24px;
    }
  `];
FiltersBar = __decorate([
    customElement('filters-bar')
], FiltersBar);
export { FiltersBar };
//# sourceMappingURL=filters-bar.js.map