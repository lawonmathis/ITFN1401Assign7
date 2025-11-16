function showLastModified() {
  
  var spot = document.getElementById("lastModified");

  
  var date = document.lastModified;


  if (spot) {
    spot.innerHTML = "Last modified: " + date;
  }
}
