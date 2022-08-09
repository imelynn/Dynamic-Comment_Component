export default class ComComp extends HTMLElement {
  constructor(){
    super();
  }
 //static get observedAttributes(){
   // return ["name", "email", "comment"];
  //}

  //attributeChangedCallback(property, oldValue, newValue){
   // if (oldValue === newValue) return;

    //if (property === "name") {
      //this.namePlaceholder.textContent = newValue;
    //}

    //if (property === "email"){
      //this.emailPlaceholder.textContent = newValue;
    //}

    //if (property === "comment"){
      //this.commentPlaceholder.textContent = newValue;
    //}
  //}

  connectedCallback() {
    //creates shadow DOM on <custom-element>
    const shadow = this.attachShadow ({mode: "open"});

    const template = document.getElementById("template").content.cloneNode(true);

    shadow.append(template);

    this.namePlaceholder = this.shadowRoot.querySelector("#nametemp");
    this.emailPlaceholder = this.shadowRoot.querySelector("#emailtemp");
    this.commentPlaceholder = this.shadowRoot.querySelector("#commenttemp");

    const name = this.getAttribute("name");

    if (name) {
      this.namePlaceholder.textContent = name;
    }

    const email = this.getAttribute("email");

    if (email) {
      this.namePlaceholder.textContent = email;
    }

    const comment = this.getAttribute("comment");

    if (comment) {
      this.namePlaceholder.textContent = comment;
    }
  }
}

customElements.define("geelynn-comcomp", ComComp);

export const createComment = () => {
  //e.preventDefault();
  //document.querySelector("form").addEventListener("submit", () => {
  
  const component = document.createElement("geelynn-comcomp");

  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  const commentValue = document.getElementById("comment").value;
  

  component.setAttribute("name", nameValue)
  component.setAttribute("email", emailValue)
  component.setAttribute("comment", commentValue);

  const results = document.querySelector("#comcomp");
  results.append(nameValue, emailValue, commentValue);
  

};

  //const tempfold = document.querySelector("#tempholder");
  //tempfold.append(component);

   //<geelynn-comcomp id="comment-component"
   //name="Gena"
   //email="gena.hurst@gmail.com"
   //comment="I Love New York">
 //</geelynn-comcomp>
