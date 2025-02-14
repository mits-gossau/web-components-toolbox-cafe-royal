// @ts-check
import Teaser from "../../web-components-toolbox/src/es/components/molecules/teaser/Teaser.js";

export default class CrProductTeaser extends Teaser {
  constructor(options = {}, ...args) {
    super({ ...options }, ...args);
  }

  connectedCallback() {
    if (this.shouldRenderCSS()) this.renderCSS();
    if (this.shouldRenderHTML()) this.renderHTML();
  }

  shouldRenderCSS() {
    return !this.root.querySelector(`${this.cssSelector} > style[_css]`);
  }

  shouldRenderHTML() {
    return !this.root.querySelector(".teaser-list");
  }

  renderCSS() {
    this.css = /* css */ `
      :host {
        display: block;
      }
      :host div {
        background-color: var(--color-white);
        border: 0.125em solid rgba(0, 0, 0, .07);
        border-radius: 0.75em;
      }
      :host figure {
        display: flex;
        flex-direction: column;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 2.5em;
      }
      :host figure > div {
        display: flex;
        align-items: center;
        width: 100%;
        border: none;
        aspect-ratio: 1 / 1;
      }
      :host figure > div > a-picture, :host figure > div > m-carousel-two > section > a-picture {
        object-fit: contain;
        background-size: contain;
        background-repeat: no-repeat;
      }
      :host figcaption {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: var(--product-teaser-figcaption-margin-top, var(--product-teaser-figcaption-margin, var(--figcaption-margin-top, var(--figcaption-margin, 1em))));
      }
      :host figcaption > div.title {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        max-width: 100%;
        min-height: var(--product-teaser-title-min-height, 3.75em);
        border: 0;
      }
      :host figcaption > div.title > h3 {
        margin-bottom: 0;
        margin-right: 0.625em;
        font-size: var(--product-teaser-h3-font-size, var(--h3-font-size, 1.875em));
        max-width: calc(100% - 1em);
      }
      :host figcaption > div.title > a-picture {
        height: 2em;
        width: auto;
        min-width: 1em;
      }
      :host figcaption > div.text {
        min-height: var(--product-teaser-text-min-height, 6em);
        border: 0;
      }
      :host figcaption > div.text > p {
        text-align: center;
        margin-top: 1.7em;
        font-size: var(--product-teaser-p-font-size, var(--p-font-size, 1em));
      }
      :host figcaption > div.no-button {
        height: 3em;
        border: 0;
      }
      @media only screen and (max-width: _max-width_) {
        :host figcaption > div > h3 {
          font-size: var(--product-teaser-h3-font-size-mobile, var(--product-teaser-h3-font-size, var(--h3-font-size-mobile, var(--h3-font-size, 1.375em))));
        }
        :host figcaption > p {
          font-size: var(--product-teaser-p-font-size-mobile, var(--product-teaser-p-font-size, var(--p-font-size-mobile, var(--p-font-size, 1em))));
        }
      }
    `;
    return this.fetchTemplate();
  }

  fetchTemplate() {
    const baseStyles = [
      {
        path: `${this.importMetaUrl}../../../../css/reset.css`, // no variables for this reason no namespace
        namespace: false,
      },
      {
        path: `${this.importMetaUrl}../../../../css/style.css`, // apply namespace and fallback to allow overwriting on deeper level
        namespaceFallback: true,
      }
    ];
    switch (this.getAttribute("namespace")) {
      case "product-teaser-default-":
        return this.fetchCSS({
          path: "/src/es/components/molecules/productTeaser/default-/default-.css",
          namespace: false,
        });
      default:
        return this.fetchCSS(baseStyles);
    }
  }

  renderHTML() {
    // path is wrong for FE, but is correct in BE!
    const fetchModules = this.fetchModules([
      {
        path: "/web-components-toolbox-cafe-royal/src/es/components/web-components-toolbox/src/es/components/organisms/grid/Grid.js",
        name: "o-grid",
      },
    ]);
    Promise.all([fetchModules])
  }
}