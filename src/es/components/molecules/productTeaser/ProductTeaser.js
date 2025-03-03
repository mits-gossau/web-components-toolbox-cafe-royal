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
        --button-primary-color-hover-custom: var(--color-cod-gray);
        --button-primary-background-color-hover-custom: var(--color-quaternary);
        --button-primary-color-hover-custom: var(--color-cod-gray);
        --carousel-two-default-background-color: var(--color-white);
        --carousel-two-default-color-custom: var(--color-silver-chalice);
        --carousel-two-default-color-hover-custom: var(--color-cod-gray);
        --carousel-two-default-arrow-nav-size: 1.5em;
        --arrow-svg-color-custom: var(--color-dusty-gray, #e3e3e3);
        --arrow-svg-color-hover-custom: #c4c3c0;
        --picture-icon-img-height: 2em;
        --picture-icon-img-width: auto;
        --carousel-two-default-nav-background-color-active:var(--arrow-svg-color-custom, gray);
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
        justify-content: center;
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
        justify-content: center;
        align-items: center;
        max-width: 100%;
        width: 100%;
        min-height: var(--product-teaser-title-min-height, 3.75em);
        border: 0;
      }
      :host figcaption > div.title > h3 {
        font-size: var(--product-teaser-h3-font-size, var(--h3-font-size, 1.875em));
        max-width: calc(100% - 2em);
        margin: 0 0.625em 0 0;
        text-align: center;
      }
      :host figcaption > div.title > a-picture {
        height: 2em;
        width: 2em;
      }
      :host figcaption > div.text {
        min-height: var(--product-teaser-text-min-height, 6em);
        border: 0;
        margin: 1.7em auto;
      }
      :host figcaption > div.text > p {
        text-align: center;
        margin: 0;
        font-size: var(--product-teaser-p-font-size, var(--p-font-size, 1em));
      }
      :host figcaption > div.no-button {
        height: 3em;
        border: 0;
      }
      @media only screen and (min-width: calc(_max-width_ + 1px)) and (max-width: 960px) {
        :host figcaption > div.title > h3 {
          font-size: var(--product-teaser-h3-font-size-mobile, var(--product-teaser-h3-font-size, var(--h3-font-size-mobile, var(--h3-font-size, 1.375em))));
        }
        :host figcaption > p {
          font-size: var(--product-teaser-p-font-size-mobile, var(--product-teaser-p-font-size, var(--p-font-size-mobile, var(--p-font-size, 1em))));
        }
      }
      @media only screen and (max-width: _max-width_) {
        :host figcaption > div.title > h3 {
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
