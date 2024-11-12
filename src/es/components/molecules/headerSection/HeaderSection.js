import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class HeaderSection extends Shadow() {
  constructor (options = {}, ...args) {
    super({ hoverInit: undefined, importMetaUrl: import.meta.url, ...options }, ...args)
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
  }

  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`
    :host section{
        display: var(--HeaderSection-display, flex);
        justify-content: var(--HeaderSection-justify-content, flex-end);
        align-items: var(--HeaderSection-align-items, center);
        flex-direction: var(--HeaderSection-flex-direction, row);
        padding-right: var(--HeaderSection-padding-right, 1em);



    }

    :host section m-language-switcher{
        --language-switcher-delica-content-width: unset !important;
    }
    
    @media screen and (max-width: 1200px) {
        :host{
            display: var(--HeaderSection-display-mobile, none);
            
        }
      }

        `
  }
}
