const addTitle = document.getElementById("addTitle");
const addtext = document.getElementById("addText");
const addNoteButton = document.getElementById("addNote");
const notesDiv = document.getElementById("notes");

showNotes();

function addNotes() {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notes = [];
  } else {
    notes = JSON.parse(notes);
  }
  if (addText.value == "") {
    alert("Add your note fisrt !!");
    return;
  }

  const noteObj = {
    title: addTitle.value,
    text: addText.value,
  };
  addTitle.value = "";
  addText.value = "";
  notes.push(noteObj);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function showNotes() {
  let notesHTML = "";
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    return;
  } else {
    notes = JSON.parse(notes);
  }
  for (let i = 0; i < notes.length; i++) {
    notesHTML += `<div class="note">
            <button class="deleteNote" id="${i}" onclick="deleteNote(${i})">Delete</button>
            <div class="title">${
              notes[i].title === "" ? "Note" : notes[i].title
            }</div>
            <div class="text">${notes[i].text}</div>
        </div>`;
  }
  notesDiv.innerHTML = notesHTML;
}

function deleteNote(ind) {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    return;
  } else {
    notes = JSON.parse(notes);
  }

  notes.splice(ind, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

addNoteButton.addEventListener("click", addNotes);
