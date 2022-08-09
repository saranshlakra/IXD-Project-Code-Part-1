alert("These pages are only for mobile screen because this is an mobile app. Please hit CTRL + SHIFT + I and after that hit CTRL + SHIT + M for mobile view and then Reload")

function applicantShow() {
  var page1 = document.getElementById("sec-1");
  var page2 = document.getElementById("sec-2");
  page1.style.display = "none";
  page2.style.display = "block";
}

function homepage() {
  var page1 = document.getElementById("sec-1");
  var page2 = document.getElementById("sec-2");
  var page3 = document.getElementById("sec-3");
  page1.style.display = "block";
  page2.style.display = "none"; 
  page3.style.display = "none";
}
  window.onload = function () {
    // "use strict";
    var formData = document.forms.loginForm;
    var formSection = document.getElementById("form");
    var sub = document.getElementById("subject");
    var page3 = document.getElementById("sec-3");
    formData.onsubmit = afterSubmit;    
  
    function afterSubmit() {
      var usName = formData.uName.value;
      document.getElementById("uName").innerHTML = "Hello," + " " + usName + "!";
      formSection.style.display = "none";
      sub.style.display = "block";
      page3.style.display = "block";
      return false;
    }
  };
  