import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class TeaserFe extends Shadow() {
    connectedCallback() {
        if (this.shouldRenderCSS()) this.renderCSS()
        const imageholder = this.root.querySelector('.image')

        imageholder.addEventListener('click', (event) => {
            console.log(event)
        })
    }

    shouldRenderCSS() {
        return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
    }

  renderCSS() {
        this.css = /* css */`
        :host {
            width: var(--TeaserFe-width, 100vw);
            height: var(--TeaserFe-height, fit-content);

        }
        .image{
            border-radius: var(--TeaserFe-image-border-radius, 0.5em);
        }
    
        .column-left {
            height: var(--TeaserFe-column-left-height, 100%);
        }
        
        .higher {
            height: var(--TeaserFe-higher-height, 40%);
        }
        
        .lower {
            height: var(--TeaserFe-lower-height, 35%);
        }
        
        .longer {
            width: var(--TeaserFe-longer-width, 60%);
        }
        
        .shorter {
            width: var(--TeaserFe-shorter-width, 40%);
        }
        
        .same {
            width: var(--TeaserFe-same-width, 50%);
        }
        
        .teaser-container {
            color: white;
            height: fit-content;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1em;

        }
    
        
        .sub {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            background-position: center;
            background-size: cover;
            position: relative;
            overflow: hidden;
        }
        
        .sub a-picture {
            width: var(--TeaserFe-sub-a-picture-width, 100%);
            height: var(--TeaserFe-sub-a-picture-height, 100%);
            position: absolute;
            object-fit: cover;
            top: 0;
            left: 0;
        }
        .img {
            height: var(--TeaserFe-img-height, 100%);
        }        
        .title {
            font-size: var(--TeaserFe-title-font-size, x-large);
            position: relative;
            z-index: 1;
            text-shadow: 1px 3px 12px black;
        }  
        
        .row {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 1em;
            height: 30vw;
        }
        .big-image {
            height: 100%;
            box-sizing: border-box;
            background: none;
        }
        .column-right {
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 1em;
        }
        .small-image {
            height: var(--TeaserFe-small-image-height, 50%);
            box-sizing: border-box;
            background: none;
        }
        .image a-picture, .title{
            transition: var(--TeaserFe-transition-duration, 0.5s);

        }

        
        .image:hover {
            cursor: pointer;
            opacity: 1;
        
        }

        .image:hover .title{
            color: var(--color-tertiary, rgb(214, 169, 88));

        }
        
        .image:hover a-picture {
            filter: grayscale(100%);

        }

        a{
            text-decoration-line: var(--TeaserFe-link-decoration-line, none);
            color: var(--TeaserFe-link-color, white);
        }


        @media only screen and (max-width: 767px){
            .title{
                font-size: var(--TeaserFe-mobile-title-font-size, large);
                text-align: center;
            }
            .image{
                border-radius: var(--TeaserFe-mobile-image-border-radius, 0.3em);
            }

            .teaser-container {
                color: white;
                height: fit-content;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 0.7em;
    
            }
            .row {
                gap: 0.7em;
                height: 55vw;
            }

            .teaser-container {
                gap: 0.7em;
            }
            .column-right {
                gap: 0.7em;
            }
        }
        @media only screen and (max-width: 400px){
            .teaser-container {
                height: fit-content;
            }
        }
        `;
    }

}
