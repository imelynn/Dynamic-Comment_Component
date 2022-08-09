import { createComment } from "./comcomp";
import "./style.css"

document.querySelector('#app').innerHTML = `
<div>
<header>
<h1>Comment App</h1>
</header>
<div id="result-grid" class = "result-grid">
        <form id="form">
          <div class="inputinfo">
            <label for="name"><h3><span>Name: </span></label>
            <input type="text" id="name" class="name" placeholder="Name" required><br>
            <label for="email"><h3><span>Email: </span></label>
            <input type="email" id="email" class="email" placeholder="Email" required>
            <label for="comment"><h3>Comment:</h3></label>
            <textarea type="text" id="comment" class="comment" cols="50" rows="4" required>
            </textarea><br><br>
            <input type="checkbox" id="checkbox" name="checkbox" checked required>
            <label id="agree">I agree to terms.</label><br><br>
            <input value="Post My Comment" type="submit" id="submit"><br>
            </div>
            </form> 
            </div>
            
            <div id=comcomp>
             
      </div>
      </div>
<template id="template">
<h1 id="nametemp"></h1>
<h3 id="emailtemp"></h3>
<h2 id="commenttemp"></h2>
</template>    
`;


//var btn = document.getElementById("send");
//btn.addEventListener("click", ComComp);

document.querySelector("#form").addEventListener("submit", (ev) => {
  ev.preventDefault();
createComment();
});
