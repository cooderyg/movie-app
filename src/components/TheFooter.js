import { Component } from "../core/cooder";
import aboutStore from '../store/about'

export default class TheFooter extends Component {
    constructor(){
        super({
            tagName: 'footer'
        })
    }
    render() {
        // const { github, repository } = aboutStore.state
        this.el.innerHTML = /*html*/ `
            <div>
                <a>
                    GitHub Repository
                </a>
            </div>
            <div>
                <a>
                    ${new Date().getFullYear()}
                    Cooder
                </a>
            </div>
        `
    }
}

// href="http://github.com/cooderYG/vanillajs-movie-app"
// href="http://github.com/cooderYG/vanillajs-movie-app"
