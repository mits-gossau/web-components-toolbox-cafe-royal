import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class RecipeTable extends Shadow() {
  constructor (options = {}, ...args) {
    super({ hoverInit: undefined, importMetaUrl: import.meta.url, ...options }, ...args)
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
    const tableHeader = this.root.querySelectorAll('th')
    const tableBody = this.root.querySelector('tbody')

    let tableWideHeaderCounter = 0
    let tableHeaderCounter = 0
    const wideHeaderWidth = 35

    tableHeader.forEach(element => {
      if (element.classList.contains('wide_head')) {
        element.style.width = wideHeaderWidth + '%'
        tableWideHeaderCounter++
      } else {
        tableHeaderCounter++
      }
    })

    tableHeader.forEach(element => {
      if (!(element.classList.contains('wide_head'))) {
        element.style.width = ((100 - (tableWideHeaderCounter * wideHeaderWidth)) / tableHeaderCounter) + '%'
      }
    })

    for (let i = 1; i < tableBody.children.length; i += 2) {
      tableBody.children[i].classList.add('tint')
    }
  }

  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`
    :host {
      width: var(--recipe-table-host-width, 100%);
      clear: var(--recipe-table-host-clear, both);
    }
    .table-container {
      overflow-x: var(--recipe-table-container-overflow-x, auto);
      width: var(--recipe-table-container-width, auto); 
      border-radius:var(--recipe-table-container, 5px);
      text-align: var(--recipe-table-container-text-align, center);
    }
    
    table {
      width: var(--recipe-table-width, 70em);
      border-collapse: var(--recipe-table-border-collapse, collapse);
    }
    
    th {
      padding: var(--recipe-table-header-padding, 1em); 
    }

    td{
      padding: 1.5em 0.5em;
    }
    
    thead tr {
      max-height: var(--recipe-table-header-height, 3em);
      height: auto;
      color: var(--background-color, white);
      background: var(--color-tertiary, var(--color-secondary, black));
    }
    
    .bold {
      font-weight: var(--recipe-table-font-weight, bold);
    }
    
    p {
      text-align: var(--recipe-table-text-align, left);
    }
    
    .tint {
      background-color: var(--recipe-table-background-tint, #dcdcdc);
    }
    
        `
  }
}
