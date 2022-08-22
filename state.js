const display = document.getElementById('display');

let state = {
    comment: 0,
};

//components

const counter = (comment) => {
    let classname = "text-error"
  

    if (count >= 5) {
        classname = "text-success"
    }

    return `<div class="${classname}">${comment}</div>`;
}

//render methods

function renderComment() {
    display.innerHTML = counter(state.comment);
};

//update methods

function addComment() {
    let newComment = state.comment + 1;
    state.comment = newComment;

    renderComment();
}

renderComment();

stateBtn.click(() => {
    addComment();
    renderComment();
})

