import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class SustainabilityMetrics extends Shadow() {
  constructor(options = {}, ...args) {
    super({ hoverInit: undefined, importMetaUrl: import.meta.url, ...options }, ...args)
    this.backgroundPicture = this.root.querySelector('.background')
    this.backgroundOverlay = this.root.querySelector('.background-overlay')
    this.numbersContainer = this.root.querySelectorAll('.numbers > *')

  }

  connectedCallback() {
    if (this.shouldRenderCSS()) this.renderCSS()
    if (this.getAttribute('defaultSource')) {
      console.log(this.numbersContainer.length)
      const currentDefaultSource = this.getAttribute('defaultSource')
      this.backgroundPicture.setAttribute('defaultSource', currentDefaultSource)
      this.backgroundPicture.style = `background-image: url(${currentDefaultSource}); background-size: cover; background-position: center;`
      this.backgroundOverlay.style.display = 'block'
      this.style = 'color: white;'
    }
  }

  shouldRenderCSS() {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS() {
    this.css = /* css */`
    :host {
        overflow: var(--sustainability-metrics-overflow, hidden);
        border-radius: var(--sustainability-metrics-border-radius, 5px);
        width: var(--sustainability-metrics-width, 100%);
        height: var(--sustainability-metrics-height, 20em);
        display: var(--sustainability-metrics-display, flex);
        justify-content: var(--sustainability-metrics-justify-content, center);
        align-items: var(--sustainability-metrics-align-items, center);
        position: var(--sustainability-metrics-position, relative);
    }

    :host p{
        color: var(--sustainability-metrics-text-color, var(--color-tertiary, black));
    }
    :host .background{
        height: var(--sustainability-metrics-background-height, 100%);
        width: var(--sustainability-metrics-background-width, 100%);
        position: var(--sustainability-metrics-background-position, absolute);
        z-index: var(--sustainability-metrics-background-z-index, 1);
    }

    .background-overlay {
        display: var(--sustainability-metrics-background-overlay-display, none);
        position: var(--sustainability-metrics-background-overlay-position, absolute);
        top: var(--sustainability-metrics-background-overlay-top, 0);
        left: var(--sustainability-metrics-background-overlay-left, 0);
        right: var(--sustainability-metrics-background-overlay-right, 0);
        bottom: var(--sustainability-metrics-background-overlay-bottom, 0);
        background-color: var(--sustainability-metrics-background-overlay-background-color, rgba(0, 0, 0, 0.5)); 
        z-index: var(--sustainability-metrics-background-overlay-z-index, 2);
        border-radius: var(--sustainability-metrics-background-overlay-border-radius, 5px);
    }

    :host .numbers{
        display: var(--sustainability-metrics-numbers-display, flex);
        justify-content: var(--sustainability-metrics-numbers-justify-content, space-around);
        align-items: var(--sustainability-metrics-numbers-align-items, center);
        position: var(--sustainability-metrics-numbers-position, relative);
        width: var(--sustainability-metrics-numbers-width, 100%);
        height: var(--sustainability-metrics-numbers-height, 100%);
        z-index: var(--sustainability-metrics-numbers-z-index, 2);
    }

    :host .numbers .number{
        display: var(--sustainability-metrics-numbers-number-display, flex);
        flex-direction: var(--sustainability-metrics-numbers-number-flex-direction, column);
        align-items: var(--sustainability-metrics-numbers-number-align-items, center);
        min-width: var(--sustainability-metrics-numbers-number-min-width, ${100 / this.numbersContainer.length}%)
        
    }

    :host .numbers .number .icon{
        width: var(--sustainability-metrics-numbers-number-icon-width, 5em);
    }

    @media only screen and (max-width: 950px) {
        .numbers{
            flex-direction: var(--sustainability-metrics-numbers-flex-direction-mobile, column);
            padding-top: var(--sustainability-metrics-numbers-padding-top-mobile, 1em);
            padding-bottom: var(--sustainability-metrics-numbers-padding-bottom-mobile, 1em);
        }
        :host{
            height: var(--sustainability-metrics-height-mobile, fit-content);        
        }
    }

        `
  }
}
