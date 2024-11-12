import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class ParallaxImageContainer extends Shadow() {
  constructor(options = {}, ...args) {
    super({ hoverInit: undefined, importMetaUrl: import.meta.url, ...options }, ...args)
    this.parallaxContainer = this.root.querySelector(".parallax-container")
    this.textSection = this.root.querySelector(".text-section")
    this.imageSource = this.parallaxContainer.getAttribute("imageSource")
    this.imageHeight = this.parallaxContainer.getAttribute("imageHeight")
    this.backgroundColor = this.textSection.getAttribute("sectionColor")
    ;
  }

  connectedCallback() {
    if (this.shouldRenderCSS()) this.renderCSS()

  }


  shouldRenderCSS() {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS() {
    this.css = /* css */`
    :host {
      --any-content-width-mobile: 100%;
      --any-content-spacing-mobile: none;
      --any-content-spacing: none;
      --any-content-width: 100%;
      border: 0;
      padding: 0;
      margin: 0;
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow-y: scroll;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      font-size: 25px;
  }

  .text-section{
    min-height: 40vh;
    height: fit-content;
    padding-top: 2em;
    padding-bottom: 2em;
    background-color: ${this.backgroundColor};

  }
  
  p {
      color: white;
      padding: 0 20vw 0 20vw;
  }
  .parallax-container {
    height: ${this.imageHeight};
    background-size: cover;
    background-attachment: fixed;
    background-image: url(${this.imageSource});
    background-size: cover;
    background-position: center;
}
        `
  }
}
