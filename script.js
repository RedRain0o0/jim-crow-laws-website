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
  introContent = document.getElementById('introContent');
  stereoContent = document.getElementById('stereoContent');
  segregContent = document.getElementById('segregContent');
  mixedContent = document.getElementById('mixedContent');
  mainContent = document.getElementById('mainContent');
  sourcesContent = document.getElementById('sourcesContent');
  creditsContent = document.getElementById('creditsContent');
  mainContent.style.display = "block";
  sourcesContent.style.display = "none";
  creditsContent.style.display = "none";
  introContent.style.display = "none";
  stereoContent.style.display = "none";
  segregContent.style.display = "none";
  mixedContent.style.display = "none";
  dropdown.style.display = "block";
}
