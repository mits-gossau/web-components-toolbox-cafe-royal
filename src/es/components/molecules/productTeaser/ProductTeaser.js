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
      :host figure > img, :host figure > m-carousel-two > section > img {
        object-fit: contain;
        height: 11vw;
        min-height: 15em;
        width: auto;
        background-size: contain;
        background-repeat: no-repeat;
      }
      :host figcaption {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      :host figcaption > span {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
      }
      :host figcaption > span > h2 {
        margin-bottom: 0;
        margin-right: 0.625em;
        font-size: 2em;
      }
      :host figcaption > span > img {
        height: 2em;
        width: auto;
      }
      :host figcaption > p {
        text-align: center;
        margin-top: 1.7em
      }
      :host figcaption > button {
        cursor: pointer;
        color: #f2f2f2;
        background-color: #121212;
        font-family: Lexend-Regular, JostRegular, HelveticaNowText, Helvetica, Arial, sans-serif;
        font-size: 1em;
        text-align: center;
        padding: 0.75em 1.5em;
        border: 0 solid;
        border-radius: 0.5em;
      }
      @media only screen and (max-width: _max-width_) {
        
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
