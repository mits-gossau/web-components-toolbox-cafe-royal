import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class StandortePickerEinzel extends Shadow() {
  constructor (options = {}, ...args) {
    super({ hoverInit: undefined, importMetaUrl: import.meta.url, ...options }, ...args)
    this.hotspots = this.root.querySelectorAll('a-hotspot')
    this.descriptions = this.root.querySelectorAll('.description')
    this.currentDescription = this.root.querySelector(".description[id='1']")
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
    this.setStartingDescription()
    document.body.addEventListener('click', this.setCurrentDescription)
  }

  disconnectedCallback () {
    document.body.removeEventListener('click', this.setCurrentDescription)
  }

  setCurrentDescription = (event) => {
    if (event) {
      const composedPath = Array.from(event.composedPath())
      if (composedPath.some(node => node.classList && node.classList.contains('btn-open'))) {
        this.currentDescription.classList.remove('active')
        if (composedPath[2].getAttribute('id') != this.currentDescription.getAttribute('id')) {
          this.descriptions.forEach(desc => {
            if (composedPath[2].getAttribute('id') === desc.getAttribute('id')) {
              this.currentDescription = desc
              this.currentDescription.classList.add('active')
            }
          })
        } else {
          this.setStartingDescription()
        }
      } else {
        this.setStartingDescription()
      }
    }
  }

  setStartingDescription () {
    this.descriptions.forEach(desc => {
      if (desc.getAttribute('id') === 'default') {
        this.currentDescription.classList.remove('active')
        this.currentDescription = desc
        this.currentDescription.classList.add('active')
      }
    })
  }

  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`
      :host {
        width: var(--StandortePickerEinzel-width, 100%);
        height: var(--StandortePickerEinzel-height, 100%);
      }

      :host m-image-hotspot {
        margin: auto;
      }

      .slide {
        display: var(--StandortePickerEinzel-display, flex);
        text-align: var(--StandortePickerEinzel-text-align, left);
        align-items: stretch;
      }

      a-picture {
        float: var(--StandortePickerEinzel-float, left);
        --img-max-width: var(--StandortePickerEinzel-img-max-width, 70%);
        padding: var(--StandortePickerEinzel-padding, 5%);
      }

      .description {
        height: var(--StandortePickerEinzel-description-height, 100%);
        display: var(--StandortePickerEinzel-description-display, none);
        transition: var(--StandortePickerEinzel-description-transition, opacity 0.5s ease); 
      }

      h2 {
        padding-top: var(--StandortePickerEinzel-h2-padding-top, 2%); 
        font-size: var(--StandortePickerEinzel-h2-font-size, large);
      }

      p {
        font-size: var(--StandortePickerEinzel-p-font-size, small);
      }

      .left-container {
        padding: var(--StandortePickerEinzel-left-container-padding, 2%);
        flex: 2.2;
        margin: auto;
      }

      .right-container {
        padding: var(--StandortePickerEinzel-right-container-padding, 3%);
        border-left: var(--StandortePickerEinzel-right-container-border-left, 1px solid grey);
        flex: 1;
      }

      .active {
        display: var(--StandortePickerEinzel-active-display, block);
        opacity: var(--StandortePickerEinzel-active-opacity, 1); 
      }

      @media only screen and (max-width: 1200px) {
        :host {
          width: var(--StandortePickerEinzel-width, 100%);
          height: var(--StandortePickerEinzel-height, 100vh);
        }

        .slide {
          flex-direction: var(--StandortePickerEinzel-slide-flex-direction, column);
          align-items: var(--StandortePickerEinzel-slide-align-items, center);
        }

        .right-container {
          width: var(--StandortePickerEinzel-right-container-width, 100%);
          border-left: var(--StandortePickerEinzel-right-container-border-left, none);
          border-top: var(--StandortePickerEinzel-right-container-border-top, 1px solid grey);
          height: var(--StandortePickerEinzel-right-container-height, fit-content);
        }

        a-picture {
          --img-max-width: var(--StandortePickerEinzel-img-max-width, 30%);
        }

        .left-container {
          width: var(--StandortePickerEinzel-left-container-width, 100%);
        }

        a-hotspot .content {
          display: none !important;
      }
      }
    
    `
  }
}
