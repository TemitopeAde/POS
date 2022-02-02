var openToggle = document.querySelector('.bars');
var sidebar = document.querySelector('.sidebar');
var closebtn = document.querySelector('.closebtn')
var closebtn2 = document.querySelector('.closebtn2')
var newSidebar = document.querySelector('.new-sidebar')


var toggleButton2 = document.querySelector('.toggle-button-2')
var hiddenForm2 = document.querySelector('.hidden2')
// console.log(hiddenForm)


var toggleCustomer = document.querySelector('.toggle-customer-button');
var customerHiddenForm = document.querySelector('.customer-form-hide');



var toggleDetails = document.querySelectorAll('.toggleDetails');


// console.log(details)

for (var i = 0; i < toggleDetails.length; i++) {
  var detail = document.getElementsByClassName('customer-row-hide')[i]
  toggleDetails[i].addEventListener('click', function(e) {
    e.preventDefault();
    detail.classList.toggle('toggle')
    console.log(detail.classList)
  })
}

// toggleDetails.forEach(name => {
//   var detail = document.getElementsByClassName('customer-row-hide')[name]
  
// })




toggleCustomer.addEventListener('click', function(e) {
  e.preventDefault();
  customerHiddenForm.classList.remove('active');
  toggleCustomer.classList.add('active')
})





toggleButton2.addEventListener('click', function(e) {
  e.preventDefault();
  hiddenForm2.classList.toggle('toggleform');
  toggleButton2.innerHTML = ''
})


openToggle.addEventListener('click', function () {
  sidebar.style.transform = "translateX(0)";
  newSidebar.style.transform = "translateX(0%)"
});



closebtn2.addEventListener('click', function() {
  newSidebar.style.transform = "translateX(-1000%)";
  sidebar.style.transform = "translateX(-100%)";
});















