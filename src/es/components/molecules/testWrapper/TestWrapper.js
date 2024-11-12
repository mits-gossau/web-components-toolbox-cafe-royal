import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class TestWrapper extends Shadow() {
  constructor (options = {}, ...args) {
    super({ hoverInit: undefined, importMetaUrl: import.meta.url, ...options }, ...args)
    this.titleElement = this.root.querySelector("h1")
    this.paragraphElement = this.root.querySelector("p")
    this.isClicked = false;
  }
  
  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
    this.resetToDefault()
    this.titleElement.addEventListener("click", function(){
        if(!this.isClicked){
            console.log("isClicked")
            this.changeColorAndText()
        }
        else{
            console.log("isNotClicked")
            this.resetToDefault()
        }
    }.bind(this))
  }

  changeColorAndText(){
    this.isClicked = true;
    this.titleElement.textContent = "Click on me again!"
    this.paragraphElement.style = "background-color: yellow;"
  }

  resetToDefault(){
    this.isClicked = false;
    this.titleElement.textContent = "Click on me!"
    this.paragraphElement.style = "background-color: white;"
  }

  disconnectedCallback () {
  }


  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`
      :host{
        --picture-scale-up-img-width: 100%;
        --picture-scale-up-img-object-fit: cover;

      }
      
    `
  }
}

