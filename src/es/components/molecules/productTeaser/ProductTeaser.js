// @ts-check
import Teaser from '../../web-components-toolbox/src/es/components/molecules/teaser/Teaser.js'

export default class CrProductTeaser extends Teaser {
  constructor (options = {}, ...args) {
    super({ ...options }, ...args)
  }

  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
    if (this.shouldRenderHTML()) this.renderHTML()
  }

  shouldRenderCSS () {
    return !this.root.querySelector(`${this.cssSelector} > style[_css]`)
  }

  shouldRenderHTML () {
    return !this.root.querySelector('.teaser-list')
  }

  renderCSS () {
    this.css = /* css */ `
      :host {
        display: block;
      }
      :host h2 {
        color:var(--h1-color, red);
      }
      @media only screen and (max-width: _max-width_) {
        :host h2 {
            color: var(--h1-color-mobile, red);
        }
      }
    `
    return this.fetchTemplate()
  }

  fetchTemplate () {
    const baseStyles = [
      {
        path: `${this.importMetaUrl}../../../../css/reset.css`, // no variables for this reason no namespace
        namespace: false
      },
      {
        path: `${this.importMetaUrl}../../../../css/style.css`, // apply namespace and fallback to allow overwriting on deeper level
        namespaceFallback: true
      }
    ]
    switch (this.getAttribute('namespace')) {
      case 'product-teaser-default-':
        return this.fetchCSS(
          {
            path: '/src/es/components/molecules/productTeaser/default-/default-.css',
            namespace: false
          })
      default:
        return this.fetchCSS(baseStyles)
    }
  }

  renderHTML () {
    const fetchModules = this.fetchModules([
      {
        path: '/src/es/components/web-components-toolbox/src/es/components/organisms/grid/Grid.js',
        name: 'o-grid'
      }
    ])
    Promise.all([fetchModules]).then((_) => {
      this.html = /* html */ `
        <div class="teaser-list">
            <h2>hello product teaser</h2>
            <o-grid namespace="grid-12er-">
                <div col-lg="3" col-md="3" col-sm="12">
                    <div style="background: lightgray; min-height: 50px;">coffee 1</div>
                </div>
                <div col-lg="3" col-md="3" col-sm="12">
                    <div style="background: lightgray; min-height: 50px;">coffee 2</div>
                </div>
                <div col-lg="3" col-md="3" col-sm="12">
                    <div style="background: lightgray; min-height: 50px;"> coffee 3 </div>
                </div>
                <div col-lg="3" col-md="3" col-sm="12">
                    <div style="background: lightgray; min-height: 50px;">coffee 4</div>
                </div> 
            </o-grid>
        </div>
        `
    })
  }
}
