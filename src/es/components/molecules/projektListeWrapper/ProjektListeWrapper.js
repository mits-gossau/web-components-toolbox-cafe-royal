import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class ProjektListeWrapper extends Shadow() {
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
        --h-margin-bottom:var(--ProjektListeWrapper--h-margin-bottom, 0.5em);
        --img-height: var(--brand-wrapper-img-height, 1%);
        --picture-store-logo-img-height: var(--brand-wrapper-img-height, 5em);
    }
    :host o-wrapper {
      --align-items: var(--ProjektListeWrapper--align-items, normal); 
    }
  


        `
  }
}
