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

var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
    // init Draggabillies
for (var i = 0; i < draggableElems.length; i++) {
    var draggableElem = draggableElems[i];
    var draggie = new Draggabilly(draggableElem, {
        // options...
    });
    draggies.push(draggie);
}


function showhide(divvy) {
    document.getElementById(divvy).style.display = "block";
}


function changepic() {
    var imgElement = document.getElementsByClassName('draggable');
    var docHeight = window.innerHeight;
    var docWidth = window.innerWidth;
    var maxHeight = Math.max(0, docHeight - 300);
    var maxWidth = Math.max(0, docWidth - 300);

    if (window.innerWidth > 600) {
        for (var p = 0; p < imgElement.length; p++) {
            var top_position = (Math.random() * maxHeight).toFixed();
            var left_position = (Math.random() * maxWidth).toFixed();
            imgElement[p].style.top = top_position + "px";
            imgElement[p].style.left = left_position + "px";
        }
    }
}

changepic();

function showInstructions() {
    document.getElementById("instructions").innerHTML = "*As images appear on the screen, feel free to drag them.";
}