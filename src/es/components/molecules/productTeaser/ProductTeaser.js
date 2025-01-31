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
        background-color: white;
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
      :host figcaption > div {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        max-width: 100%;
        border: 0;
      }
      :host figcaption > div > h2 {
        margin-bottom: 0;
        margin-right: 0.625em;
        font-size: var(--product-teaser-h2-font-size, var(--h2-font-size, 2em));
        max-width: calc(100% - 1em);
      }
      :host figcaption > div > a-picture {
        height: 2em;
        width: auto;
        min-width: 1em;
      }
      :host figcaption > p {
        text-align: center;
        margin-top: 1.7em;
        font-size: var(--product-teaser-p-font-size, var(--p-font-size, 1em));
      }
      @media only screen and (max-width: _max-width_) {
        :host figcaption > span > h2 {
          font-size: var(--product-teaser-h2-font-size-mobile, var(--product-teaser-h2-font-size, var(--h2-font-size-mobile, var(--h2-font-size, 2em))));
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
