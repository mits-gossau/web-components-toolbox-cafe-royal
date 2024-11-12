import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class BrandWrapper extends Shadow() {
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
    :host{
      display: var(--any-display, block);
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      gap: 1em;
      --any-display: var(--brand-wrapper-any-display, flex);
      --img-height: var(--brand-wrapper-img-height, 1%);
      --picture-scale-up-img-height: var(--brand-wrapper-picture-scale-up-img-height, 8em);
      --picture-scale-up-img-width: var(--brand-wrapper-picture-scale-up-img-width, 10em);

    }
    :host a{
      flex: 1 0 21%;
    }

    @media only screen and (max-width: 767px) {
      :host a{
        flex: 1 0 46%;
      }
    }

        `
  }
}
