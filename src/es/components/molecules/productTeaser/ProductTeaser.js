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
        /* min-width: 350px;
        max-width: calc(100% / 3); */
      }
      :host div {
        background-color: white;
        border: 2px solid rgba(0, 0, 0, .07);
        border-radius: 12px;
      }
      :host figure {
        display: flex;
        flex-direction: column;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 40px;
      }
      :host figure > img {
        object-fit: contain;
        height: 11vw;
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
        margin-bottom: 0px;
        margin-right: 10px;
      }
      :host figcaption > span > img {
        height: 32px;
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
        font-size: 16px;
        text-align: center;
        padding: 12px 24px;
        border: 0px solid;
        border-radius: 8px;
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
      },
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
    const fetchModules = this.fetchModules([
      {
        path: "/src/es/components/web-components-toolbox/src/es/components/organisms/grid/Grid.js",
        name: "o-grid",
      },
    ]);
    Promise.all([fetchModules]).then((_) => {
      this.html = /* html */ `
        <div>
          <figure>
            <img namespace="picture-teaser-" picture-load src="./../../../../../src/es/components/molecules/productTeaser/img/kaffee.png" alt="kafi" />
            <figcaption>
              <span>
                <h2>Lungo 10</h2>
                <img src="./../../../../../src/es/components/molecules/productTeaser/img/Kapsel.svg" alt="Kapsel" />
              </span>
              <p>Harmonisch & Caramelnoten<br /><strong>Intensity 5</strong></p>
              <button type="button">Wo kaufen</button>
            </figcaption>
          </figure>
        </div>
      `;
    });
  }
}
