function openTab(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  
  document.getElementById("defaultOpen").click();
  

  function openTabs(evt, Tabs) {
    var i, tabcontents, tablinkss;
    tabcontents = document.getElementsByClassName("tabcontents");
    for (i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
    }
    tablinkss = document.getElementsByClassName("tablinkss");
    for (i = 0; i < tablinkss.length; i++) {
      tablinkss[i].className = tablinkss[i].className.replace(" active", "");
    }
    document.getElementById(Tabs).style.display = "block";
    evt.currentTarget.className += " active";
  }
 
 
   var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
