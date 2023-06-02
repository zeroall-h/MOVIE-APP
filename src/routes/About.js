import { Component } from "../core/heropy.js";
import aboutStore from '../store/about.js'

export default class About extends Component{
  render(){
    const {photo, name, email, github } = aboutStore.state
    this.el.classList.add('container', 'about')
    this.el.innerHTML=`
    <div class="photo" style="background-image:url(${photo})"></div>
    <p class="name">${name}</p>
    <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" target="_blank">${email}</a></p>
    <p><a href="${github}" target="_blank">Github</a></p>
    `
  }
}

