const template = document.createElement('template');
template.innerHTML = `
<div>
<h3></h3>
<h4></h4>
<p><p>
</div>
`;

class ComComp extends HTMLElement {
  constructor(){
    super();
  
  this.attachShadow ({mode: "open"});
  this.shadowRoot.appendChilddocument(template.content.cloneNode(true));

  }
}

customElements.define("geelynn-comcomp", ComComp);

export const createComment = () => {
  
  var component = document.createElement("geelynn-comcomp");

  var nameValue = document.getElementById("name").value;
  var emailValue = document.getElementById("email").value;
  var commentValue = document.getElementById("comment").value;
  

  var results = document.querySelector("#template");

  results.append(`Name: ${nameValue}`);
  results.append(`Email: ${emailValue}`);
  results.append(commentValue);
};
