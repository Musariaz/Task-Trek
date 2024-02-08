let addbtn = document.querySelector("#addbtn");
shownotes();


addbtn.addEventListener('click',function(e){
    let addtxt = document.querySelector("#addtext");
    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObj = [];
    }

    else{
        notesObj = JSON.parse(notes);

    }

    notesObj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value = "";
    console.log(notesObj);
    shownotes();
});


function shownotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];

    }

    else{
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element, index){
        html += `
        
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id = "${index}" onclick= "deletenotes(this.id)" class="btn btn-primary">Delete Note</button>
          </div>
        </div>
      
        `
    });

    let noteselem = document.getElementById("notes");
    if(notesObj.length != 0 ){
    noteselem.innerHTML = html;
    }

    else{
        noteselem.innerHTML = `Nothing to show here. Use "Add a Note" section above to add notes.`;
    }

}

function deletenotes(index){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }

    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}