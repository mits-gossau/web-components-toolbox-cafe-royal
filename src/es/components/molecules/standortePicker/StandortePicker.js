import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class StandortePicker extends Shadow() {
  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
  }

  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`

    :host{
      width: var(--standorte-picker-width, 100%);
      height: var(--standorte-picker-height, 100%);

      --display-active: var(--standorte-picker-display-active, flex);
    }
    m-tabs{
      --background-color: var(--standorte-picker-background-color, var(--color-secondary));
      --color-active: var(--standorte-picker-color-active, var(--color-tertiary));

    }
    m-tabs .tab-content{
      justify-content: var(--standorte-picker-tab-content-justify-content, space-evenly);

    }
    .left-container{
      width: var(--standorte-picker-left-container-width, 60%);
      height: var(--standorte-picker-left-container-height, 100%);
      padding: var(--standorte-picker-left-container-padding, 3%);

    }
    m-tabs section .right-container{
      padding: var(--standorte-picker-right-container-padding, 3%);
      width: var(--standorte-picker-right-container-width, 30%);
      border-left: var(--standorte-picker-right-container-border-left, 1px solid black);

    }
    @media only screen and (max-width: 1200px) {      
      :host{
        width: var(--standorte-picker-width, 100%);
        height: var(--standorte-picker-height, fit-content);
        padding-bottom: var(--standorte-picker-padding-bottom, 5%);
      }

  }

  @media only screen and (max-width: 768px) {      
    :host{
      overflow: var(--standorte-picker-overflow, hidden);
    }
    m-tabs{
      --tab-justify-content: var(--standorte-picker-tab-justify-content, space-around);

    }

  }

      `
  }
}
