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