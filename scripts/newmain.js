// function openCity(evt, cityName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }
$(document).ready(function() {

    $(".Level_3").click(function(e) {
        if ($(e.target).is('.Level_3')) {
            $(this).find(".Level_4").toggle();
        }
    });

    $(".Level_2").click(function(e) {
        if ($(e.target).is('.Level_2')) {
            $(this).find(".Level_3").toggle();
        }
    });

    $(".Level_1").click(function(e) {
        if ($(e.target).is('.Level_1')) {
            $(this).find(".Level_2").toggle();
        }
    });

    $(".Level_1").click(function() {
        $(".tablinks", this).toggleClass('underline');
    });
});
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


// function showhide(divvy) {
//     var elements = document.getElementsByTagName("*");
//     var highest_index = 0;

//     for (var i = 0; i < elements.length - 1; i++) {
//         if (parseInt(elements[i].style.zIndex) > highest_index) {
//             highest_index = parseInt(elements[i].style.zIndex);
//         }
//     }
//     document.getElementById(divvy).style.display = "block";
//     document.getElementById(divvy).style.zIndex = highest_index + 1;
// }


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