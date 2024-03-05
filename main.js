const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//to show if any notes are available in the local storage

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


//to storage the notes in the local storage and display the same even if the web is refreshed

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

//to create notes input box with delete img button
createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("p");
    let img =document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})


//to add functional remove button with img element
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes =document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function (){
                updateStorage();
            }
        })
    }
})

// localStorage.clear();

//to get to next line while pressing enter key 

document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})