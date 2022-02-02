var openToggle = document.querySelector('.bars');
var sidebar = document.querySelector('.sidebar');

var closebtn2 = document.querySelector('.closebtn2')
var newSidebar = document.querySelector('.new-sidebar')


var toggleButton = document.querySelector('.toggle-button')
var toggleButton2 = document.querySelector('.toggle-button-2')
var hiddenForm = document.querySelector('.hidden')
var hiddenForm2 = document.querySelector('.hidden2')
// console.log(hiddenForm)


// var dismiss = document.querySelector('#dismiss');
// var text = document.querySelector('.inventorywrap')


// dismiss.addEventListener('click', function() {
//   text.classList.add('active')
// })




// toggleButton.addEventListener('click', function(e) {
//   e.preventDefault();
//   hiddenForm.classList.toggle('toggleform');
//   toggleButton.innerHTML = ''
// })


// toggleButton2.addEventListener('click', function(e) {
//   e.preventDefault();
//   hiddenForm2.classList.toggle('toggleform');
//   toggleButton.innerHTML = ''
// })




openToggle.addEventListener('click', function () {
  sidebar.style.transform = "translateX(0)";
});


// closebtn.addEventListener('click', function() {
//   sidebar.style.transform = "translateX(-100%)"
// });


// closebtn2.addEventListener('click', function() {
//   newSidebar.style.transform = "translateX(1000%)";
  
// })










function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

