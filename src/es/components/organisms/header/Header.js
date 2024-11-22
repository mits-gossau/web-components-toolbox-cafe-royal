import Body from '../../web-components-toolbox/src/es/components/organisms/body/Body.js';
import Header from '../../web-components-toolbox/src/es/components/organisms/header/Header.js';

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

export default class Header extends Header() {

    connectedCallback() {
        console.log("newHEader")
    }
    renderCSS() {
        const result = super.renderCSS()
        this.css = /* css */ `
    :host {
        --header-nav-grid-delica-background-color: white;
        --header-nav-grid-delica-a-menu-icon-background-color-custom: var(--color);
        --header-nav-grid-delica-margin: 1rem;
        --header-nav-grid-delica-justify-content: none;
        --logo-default-justify-content: start;
        background-color: white;
        --multi-level-navigation-default-o-nav-wrapper-padding: 2em;
        --multi-level-navigation-delica-padding: padding: 0 1em 0 0;
    
    }
    
    :host>header {
        width: var(--any-content-width, var(--content-width, auto));
        display: grid;
        grid-template-areas:
            'logo login'
            'logo navigation';
        grid-template-columns: auto 1fr;
    }
    
    :host>header>a-logo {
        --logo-default-height: 7rem;
        --logo-default-width: 10rem;
        --logo-default-justify-content: start;
        grid-area: logo;
        position: relative;
        transform: none;
        left: 1rem;
        top: 1rem;
    }
    
    :host>header>m-language-switcher {
        grid-area: login;
        width: 100%;
    }
    
    :host>header>m-multi-level-navigation {
        --o-nav-wrapper-top: 3.5rem;
        --logo-default-width: 11rem;
        grid-area: navigation;
        max-width: none;
        margin-right: -1rem;
    }
    
    @media only screen and (max-width: 1200px) {
        :host>header>a-menu-icon {
            right: 1.5rem;
            position: relative;
            top: -0.2rem;
        }
        :host>header>a-menu-icon {
            grid-area: menu-icon;
            order: 0;
            --header-nav-grid-delica-a-menu-icon-padding: 1.5rem 0 1.5rem 1rem;
        }
    
        :host>header>m-multi-level-navigation {
            animation: closeRight .4s ease-in;
            left: auto;
            right: -100vw;
        }
    
        :host>header.open>m-multi-level-navigation {
            animation: openRight .3s ease-out;
            left: auto;
            right: 0;
        }
    
        :host>header>a-logo {
            --logo-default-height-mobile: auto;
            --logo-default-width-mobile: 7rem !important;
            left: 0;
            top: -0.2rem;
        }
    }
    
    @media only screen and (max-width: _max-width_) {
        :host>header {
            grid-template-areas:
                'logo login menu-icon';
            grid-template-columns: auto 1fr auto;
            margin: 1rem;
            height: 4.5rem;
            width: auto;
        }
    
        :host>header.open {
            width: calc(100% - 2rem);
        }
    
        :host>header>a-logo {
            --logo-default-height-mobile: 4rem;
            --logo-default-width-mobile: 4rem;
            margin: auto 0;
        }
    
        :host>header>a-menu-icon {
            grid-area: menu-icon;
            order: 0;
            --header-nav-grid-delica-a-menu-icon-padding: 1.5rem 0 1.5rem 1rem;
            --header-nav-grid-delica-a-menu-icon-padding-open: 1.5rem 0 1.5rem 1rem;
        }
    
        :host>header.open>m-multi-level-navigation {
            --m-multi-level-navigation-height-open-mobile: calc(100svh - 4.5rem);
            grid-area: none;
            top: 4.5rem;
            left: -1rem;
            right: 0;
            width: calc(100% + 2rem);
        }
    
        :host>header>m-multi-level-navigation {
            animation: closeRight .4s ease-in;
            left: auto;
            right: -100vw;
        }
    
        :host>header.open>m-multi-level-navigation {
            animation: openRight .3s ease-out;
            left: -1rem;
            right: 0;
        }
    }
    
    @keyframes openRight {
        0% {
            right: -100vw
        }
    
        100% {
            right: 0
        }
    }
    
    @keyframes closeRight {
        0% {
            right: 0
        }
    
        100% {
            right: -100vw
        }
    }
    `;
        return result
    }
}