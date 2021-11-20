let nameInput =document.getElementById("username")
let emailInput = document.getElementById("email")


let valid=true
valid = valid && nameInput.checkValidity()
valid = valid && emailInput.checkValidity() 

window.onload = function() {
    document.getElementById('form').addEventListener('submit', function(event){
        event.preventDefault()
    }) 
}

function checkUserName() {
    if (!nameInput.checkValidity()) {
        document.getElementById("usr-error")
        .style.display = "block";
        document.getElementById("usr-error")
                  .innerHTML="<p>Invalid name</p>";


    } else {
        document.getElementById("usr-error")
                  .style.display = "none";
    }

}

function checkEmail() {
  
    if (!emailInput.checkValidity()) {
        document.getElementById("email-error")
                  .style.display = "block";

                  document.getElementById("email-error")
                  .innerHTML="<p>That is not a valid email</p>";
    } else {
        document.getElementById("email-error")
                  .style.display = "none";
    }
}



function validate() {
    //Get all of the form inputs
    let inputs = document.getElementById("form").elements
    let valid = true
    //loop over each input and check that it is valid
    for (let input of inputs) {
        valid = valid && input.checkValidity()
    }
    //alert based on form validity
    if (valid) {
        alert("submitted")
    }

}


function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.background = "";
        tablinks[i].style.color = "black";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = '#6f1d1b';
    elmnt.style.color = '#fff';
}

// Books page
function readMore(bookNum, elmnt) {
  let i, modal, tablinks;
  modal = document.getElementsByClassName("modal");
  for (i = 0; i < modal.length; i++) {
    modal[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.background = "";
}

document.getElementById(bookNum).style.display = "block";
elmnt.style.backgroundColor = '#6f1d1b';

}
function closeBook1() {
  let modalElement = document.getElementById('book1')
  modalElement.style.display = "none"
}

function closeBook2() {
  let modalElement = document.getElementById('book2')
  modalElement.style.display = "none"
}

function closeBook3() {
  let modalElement = document.getElementById('book3')
  modalElement.style.display = "none"
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// Sign up modal

function openModal() {
  let modalElement = document.getElementById("signup-modal")
  modalElement.style.display = "block"
}

function closeModal() {
  let modalElement = document.getElementById("signup-modal")
  modalElement.style.display = "none"
}

function onCheckbox() {
  let checkBoxElement = document.getElementById("agree")
  checkBoxElement.checked = false
  openModal()
}

function onAgree() {
  let checkBoxElement = document.getElementById("agree")
  checkBoxElement.checked = true
  closeModal()
}


function onDisagree() {
  let checkBoxElement = document.getElementById("agree")
  checkBoxElement.checked = false
  closeModal()
}

function onBackgroundClose(event) {
  if (event.target.id == "signup-model") {
    closeModal()
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    closeModal()
  }
})



