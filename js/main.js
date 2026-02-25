// TAB TITLE

window.onfocus = function() {
  document.title = "RS Portfolio : Welcome";
}

window.onblur = function() {
  document.title = "RS Portfolio : Come Back";
}

const portfolioButton = document.getElementById('web-sub-name');

portfolioButton.addEventListener('click',transformName);

function transformName() {
  console.log('clicked portfolio');
  
}