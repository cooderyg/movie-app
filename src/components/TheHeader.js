import { Component } from "../core/cooder";

export default class TheHeader extends Component {
    constructor(){
        super({
            tagName: 'header',
            state: {
                menus: [
                    {
                        name: 'Search',
                        herf: '#/'
                    },
                    {
                        name: 'Movie',
                        herf: '#/movie?id=tt1375666'
                    },
                    {
                        name: 'About',
                        herf: '#/about'
                    }
                ]
            }
        })
        window.addEventListener('popstate', () => {
            this.render()
        })
    }
    render() {
        this.el.innerHTML = /*html*/ `
            <a href="#/" class="logo">
                <span>OMDBAPI</span>.COM
            </a>
            <nav>
                <ul>
                    ${this.state.menus.map(menu => {
                        const href = menu.herf.split('?')[0];
                        const hash = location.hash.split('?')[0];
                        const isActive = href === hash  
                        return /*html*/ `
                            <li>
                                <a class="${isActive ? 'active' : ''}" 
                                    href="${menu.herf}">
                                    ${menu.name}
                                </a>
                            </li>
                        `
                    }).join('')}
                </ul>
            </nav>
            <a href="#/about" class="user">
                <img src="http://cooder.kr/img/logo_movie.png">
            </a>
        ` 
    }
}

