import Body from '../../web-components-toolbox/src/es/components/organisms/body/Body.js';
import {Wrapper} from '../../web-components-toolbox/src/es/components/organisms/wrapper/Wrapper.js'; 

/**
 * Example at: /src/es/components/pages/Home.html
 * As an organism, this component shall hold molecules and/or atoms
 *
 * @export
 * @class Wrapper
 * @type {CustomElementConstructor}
 * @attribute {
 * {number} [columns=3] example 3 column container
 * {n.a} [no-space] removes margin-bottom from section element
 * {string} [align-content-mobile="center"] valid values: left, center, right
 * {string} [align-content="center"] valid values: left, center, right
 * }
 * @css {
 * var(--p-line-height-mobile, normal)
 * var(--p-line-height, normal)
 * var(--wrapper-div-margin-mobile, 0)
 * var(--wrapper-div-margin, 0)
 * var(--wrapper-margin-bottom-mobile, 0)
 * var(--wrapper-margin-bottom, 0)
 * }
 */

export default class HeadshotWrapper extends Wrapper() {
  renderCSS() {
    const result = super.renderCSS()
    this.css = /* css */ `
        :host {
          --align-items: center;
          --flex-direction: column;
          --h3-text-align: center;
          --p-text-align: center;
          
          --hr-border-top: var(--hr-border-top-custom, 1px solid black);
          --hr-margin: var(--hr-margin-custom, 20px 0);
        }
        
        :host a-picture {
          --any-1-width: 100%;
        }
        
        :host > section {
          flex-wrap: nowrap !important;
        }
    `;
    return result
  }
}