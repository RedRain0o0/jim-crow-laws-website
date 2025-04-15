function changeContent(content) {
  content = document.getElementById(content);
  mainContent = document.getElementById('mainContent');
  sourcesContent = document.getElementById('sourcesContent');
  creditsContent = document.getElementById('creditsContent');
  mainContent.style.display = "none";
  sourcesContent.style.display = "none";
  creditsContent.style.display = "none";
  content.style.display = "block";
}

function dropdownTo(dropdown) {
  dropdown = document.getElementById(dropdown);
  p1Content = document.getElementById('p1Content');
  p2Content = document.getElementById('p2Content');
  p3Content = document.getElementById('p3Content');
  mainContent = document.getElementById('mainContent');
  sourcesContent = document.getElementById('sourcesContent');
  creditsContent = document.getElementById('creditsContent');
  mainContent.style.display = "block";
  sourcesContent.style.display = "none";
  creditsContent.style.display = "none";
  p1Content.style.display = "none";
  p2Content.style.display = "none";
  p3Content.style.display = "none";
  dropdown.style.display = "block";
}
