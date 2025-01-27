// @ts-check
import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

/**
* @export
* @class ProductTeaserModal
* @type {CustomElementConstructor}
*/
export default class ProductTeaserModal extends Shadow() {
  constructor (options = {}, ...args) {
    super({ importMetaUrl: import.meta.url, ...options }, ...args)
    this.clickListener = event => {
      // if (!this.hasAttribute('open')) event.stopPropagation()
      // this.dispatchEvent(new CustomEvent(this.getAttribute('open-modal') || 'open-modal', {
      //   detail: {
      //     origEvent: event,
      //     child: this
      //   },
      //   bubbles: true,
      //   cancelable: true,
      //   composed: true
      // }))
    }
  }

  connectedCallback () {
    this.hidden = true
    const showPromises = []
    if (this.shouldRenderCSS()) showPromises.push(this.renderCSS())
    if (this.shouldRenderHTML()) showPromises.push(this.renderHTML())
    Promise.all(showPromises).then(() => (this.hidden = false))
    this.addEventListener('click', this.clickListener)
  }

  disconnectedCallback () {
    this.removeEventListener('click', this.clickListener)
  }

  /**
   * evaluates if a render is necessary
   *
   * @return {boolean}
   */
  shouldRenderCSS () {
    return !this.root.querySelector(`${this.cssSelector} > style[_css]`)
  }

  /**
   * evaluates if a render is necessary
   *
   * @return {boolean}
   */
  shouldRenderHTML () {
    return !this.div
  }

  /**
   * renders the css
   * @returns Promise<void>
   */
  renderCSS () {
    this.css = /* css */`
      :host div {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 445px;
        height: fit-content;
        background-color: white;
        border-radius: 12px;
        align-items: center;
      }
      :host div > span {
        position: absolute;
        right: 0px;
        text-align: right;
      }
      :host div > span > * {
        display: unset !important;
      }
      :host div > h3 {
        font-family: Lexend-Medium, JostRegular, HelveticaNowText, Helvetica, Arial, sans-serif;
        font-size: 29px;
        font-weight: 900;
        text-align: center;
        margin: 25px 1.25em 0px;
      }
      :host div > a-picture {
        width: 219px;
        height: 260px;
        margin: 32px auto;
      }
      :host div > h4 {
        font-family: Lexend-Semi-Bold, JostRegular, HelveticaNowText, Helvetica, Arial, sans-serif;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin: 0px 1.25em 0px;
      }
      :host div > div.two-stores {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        height: 45px;
        padding: 0px 1.25em;
        margin: 32px 0px;
      }
      :host div > div.three-stores {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 45px;
        padding: 0px 1.25em;
        margin: 32px 0px;
      }
      :host div > div.two-stores > a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        max-height: 100%;
        width: calc(100% / 3);
        margin: 0px;
      }
      :host div > div.three-stores > a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        max-height: 100%;
        width: calc(100% / 3 - 6%);
        margin: 0px;
      }
      :host div > div.three-stores > a > img {
        max-height: 100%;
        width: auto;
      }
      :host div > p {
        text-align: center;
        margin: 0px 1.25em 20px;
      }
      @media only screen and (max-width: _max-width_) {
        :host {}
      }
    `
    return this.fetchTemplate()
  }

  /**
   * fetches the template
   */
  fetchTemplate () {
    const styles = [
      {
        path: `${this.importMetaUrl}../../web-components-toolbox/src/css/reset.css`, // no variables for this reason no namespace
        namespace: false
      },
      {
        path: `${this.importMetaUrl}../../web-components-toolbox/src/css/style.css`, // apply namespace and fallback to allow overwriting on deeper level
        namespaceFallback: true
      }
    ]
    switch (this.getAttribute('namespace')) {
      case 'product-teaser-modal-default-':
        return this.fetchCSS([{
          path: `${this.importMetaUrl}./default-/default-.css`, // apply namespace since it is specific and no fallback
          namespace: false
        }, ...styles])
      default:
        return this.fetchCSS(styles)
    }
  }

  /**
   * Render HTML
   * @returns Promise<void>
   */
  renderHTML () {
    // path is wrong for FE, but is correct in BE!
    const fetchModules = this.fetchModules([
      {
        path: "/web-components-toolbox-cafe-royal/src/es/components/web-components-toolbox/src/es/components/molecules/dialog/Dialog.js",
        name: "m-dialog",
      },
    ]);
    Promise.all([fetchModules])
  }

  get div () {
    return this.root.querySelector('div')
  }
}
