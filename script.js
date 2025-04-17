function changeContent(content) {
  content = document.getElementById(content);
  mainContent = document.getElementById('mainContent');
  theendContent = document.getElementById('theendContent');
  sourcesContent = document.getElementById('sourcesContent');
  creditsContent = document.getElementById('creditsContent');
  mainContent.style.display = "none";
  theendContent.style.display = "none";
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
  theendContent = document.getElementById('theendContent');
  sourcesContent = document.getElementById('sourcesContent');
  creditsContent = document.getElementById('creditsContent');
  mainContent.style.display = "block";
  theendContent.style.display = "none";
  sourcesContent.style.display = "none";
  creditsContent.style.display = "none";
  introContent.style.display = "none";
  stereoContent.style.display = "none";
  segregContent.style.display = "none";
  mixedContent.style.display = "none";
  dropdown.style.display = "block";
}

function camdenSpecial() {
  jimCrowHeader = document.getElementById('jimCrowHeader');
  camdenSpecial = document.getElementById('camdenSpecial');
  console.log("Blame Camden");
  console.log("(also ignore the errors when trying to toggle back idk why its broken)");
  if (camdenSpecial.style.display === "none") {
    camdenSpecial.style.display = "block";
    jimCrowHeader.style.display = "none";
  }
}
