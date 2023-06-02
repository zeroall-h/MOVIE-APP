import { Component } from "../core/heropy.js";
import aboutStore from '../store/about.js'

export default class TheFooter extends Component{
  constructor(){
    super({
      tagName: 'footer'
    })
  }
  render(){
    const { github, reposipory } = aboutStore.state
    this.el.innerHTML = `
    <div>
      <a href="${reposipory}">
      GitHub Repository
      </a>
    </div>
    <div>
    <a href="${github}">
      ${new Date().getFullYear()}
      Zeroall
    </a>
    </div>`
  }
}