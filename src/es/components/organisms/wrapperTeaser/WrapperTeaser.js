import Body from '../../web-components-toolbox/src/es/components/organisms/body/Body.js';
import { Wrapper } from '../../web-components-toolbox/src/es/components/organisms/wrapper/Wrapper.js';

/**
 * Example at: /src/es/components/pages/Home.html
 * As an organism, this component shall hold molecules and/or atoms
 *
 * @export
 * @class Wrapper
 * @type {CustomElementConstructor}
 * @attribute {
 * {number} [columns=3] example 3 column container
 * {n.a} [no-space] removes margin-bottom from section element
 * {string} [align-content-mobile="center"] valid values: left, center, right
 * {string} [align-content="center"] valid values: left, center, right
 * }
 * @css {
 * var(--p-line-height-mobile, normal)
 * var(--p-line-height, normal)
 * var(--wrapper-div-margin-mobile, 0)
 * var(--wrapper-div-margin, 0)
 * var(--wrapper-margin-bottom-mobile, 0)
 * var(--wrapper-margin-bottom, 0)
 * }
 */

export default class WrapperTeaser extends Wrapper() {
    constructor(options = {}, ...args) {
        super({ importMetaUrl: import.meta.url, ...options }, ...args)

    }
    renderCSS() {
        const result = super.renderCSS()
        this.css = /* css */ `
        
    `;
        return this.fetchTemplate
    }

    fetchTemplate() {
        let urlToParent = "../../../../es/components/web-components-toolbox/src/es/components/organisms/wrapper/"
        /** @type {import("../../prototypes/Shadow.js").fetchCSSParams[]} */
        const styles = [
            {
                path: `${this.importMetaUrl}../../../../es/components/web-components-toolbox/src/css/reset.css`,
                namespace: false
            },
            {
                path: `${this.importMetaUrl}../../../../es/components/web-components-toolbox/src/css/style.css`,
                namespaceFallback: true
            }
        ]
        switch (this.getAttribute('namespace')) {
            case 'wrapper-teaser-':
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}${urlToParent}teaser-/teaser-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles], false).then(() => this.calcColumnWidth())
            case 'wrapper-teaser-recipe-':
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}${urlToParent}teaser-recipe-/teaser-recipe-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles], false).then(() => this.calcColumnWidth())
            case 'wrapper-text-':
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}${urlToParent}text-/text-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles], false).then(() => this.calcColumnWidth())
            case 'wrapper-text-center-':
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}${urlToParent}text-center-/text-center-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles], false).then(() => this.calcColumnWidth())
            case 'wrapper-no-calc-column-width-':
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}${urlToParent}no-calc-column-width-/no-calc-column-width-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles], false).then(() => this.calcColumnWidth())
            case 'wrapper-no-calc-column-width-left-':
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}${urlToParent}no-calc-column-width-left-/no-calc-column-width-left-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles], false).then(() => this.calcColumnWidth())
            case 'menu-legends-':
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}${urlToParent}menu-legends-/menu-legends-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles], false).then(() => this.calcColumnWidth())
            case 'wrapper-text-picture-cover-':
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}${urlToParent}text-picture-cover-/text-picture-cover-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles], false).then(() => this.calcColumnWidth())
            case 'wrapper-spacer-':
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}${urlToParent}spacer-/spacer-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles], false).then(() => this.calcColumnWidth())
            case 'wrapper-teaser-center-':
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}./teaser-center-/teaser-center-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles], false).then(() => this.calcColumnWidth())
            default:
                if (!this.hasAttribute('namespace')) {
                    this.css = /* css */`
              :host {
                --gap: var(--gap-custom, var(--content-spacing));
              }
              :host > section > *:not(a-picture) ~ * {
                align-self: var(--not-a-picture-align-self, normal);
              }
              @media only screen and (max-width: _max-width_) {
                :host {
                  --gap: var(--gap-mobile-custom, var(--gap-custom, var(--content-spacing-mobile, var(--content-spacing))));
                }
              }
            `
                }
                return this.fetchCSS(styles, false).then(() => this.calcColumnWidth())
        }
    }

}