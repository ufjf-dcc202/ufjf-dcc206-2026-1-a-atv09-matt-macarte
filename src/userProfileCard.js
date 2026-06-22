// import { createElement } from "react";

export class UserProfileCard extends HTMLElement {
    static get observedAttributes() {
        return ["name", "bio", "image"];
    }

    constructor() {
        super();
        this.template = document.createElement("template");
        this.attachShadow({ mode: "open" });
        this.build();
    }

    build() {
        this.template.innerHTML = `
      <div class="header">
        <h1>User Card</h1>
      </div>
      <div>
        <img class='profImg' alt='profile pic'/>
        <h4 class='nome'></h4>
        <p class='bio'></p>

      </div>
    `;
        this.style();
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name' && oldValue !== newValue) 
          this.shadowRoot.querySelector('.nome').innerHTML = newValue;
        if (name === 'bio' && oldValue !== newValue) 
          this.shadowRoot.querySelector('.bio').innerHTML = newValue;
        if (name === 'image' && oldValue !== newValue) 
          this.shadowRoot.querySelector('.profImg').src = newValue;
        
    }

    style() {
        this.innerHTML += `
      <style>
        user-card {
          display: flex;
          flex-direction: column;
          align-items:center;

          background: violet;
          border-radius: 2rem;
          width: fit-content;
          padding: 1rem 1.6rem;
        }
      
      </style>
    `;
        this.shadowRoot.innerHTML += `
      <style>
        div {
          display: flex;
          flex-direction: column;
          align-items:center;

          width: fit-content;
          padding: 1rem 2rem;
        }
          img {
          border-radius: 2rem;
          max-width: 20vw;
          
          }
      
      </style>
    `;
    }
}

customElements.define("user-card", UserProfileCard);
