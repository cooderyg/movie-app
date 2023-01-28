import { Component } from "../core/cooder";

export default class NotFound extends Component {
    render() {
        this.el.classList.add('container', 'not-found');
        this.el.innerHTML = /*html*/ `
            <h2>
                Sorry..<br>
                Page Not Found.
            </h2>
        `
    }
}