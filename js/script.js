showNotes();
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  // Function To Display Notes in the .notes div
  showNotes();
});

// Function To Show Text which is stored in Lcoal Storage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
    <div class="noteCard text-dark bg-light my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> Note- ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button  id= "${
              index
            }" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button >
        </div>
    </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = ` Nothing to show! Use "Add Notes" section to add notes.`;
    notesElm.style.color = "red" ;
    notesElm.style.marginTop= "50px";
    notesElm.style.textAlign = "center"
    notesElm.style.fontWeight = "bold";
  }
}

// Function to Delte Notes
function deleteNote(index) {
  console.log("delete button clicked!!!!", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


// For Search Button Functionality
 let searchTxt =  document.getElementById('searchTxt');
 searchTxt.addEventListener('input', function(){

  let searchValue= searchTxt.value.toLowerCase();
  let noteCards = document.getElementsByClassName('noteCard');

  Array.from(noteCards).forEach(function (element){
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(searchValue)){
      element.style.display= "block";
    }
    else{
      element.style.display="none";
    }
  })

 })