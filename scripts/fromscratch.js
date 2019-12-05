// *Menu Structure*
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
            $(this).find(".Level_2").toggleClass("Level_2_vis");
        }
    });

});

// *Active Underline*
$(document).ready(function() {
    $("h1, s").click(function() {
        $(this).toggleClass('underline');
    });
});




//*Show Instructions*

function showInstructions() {
    document.getElementById("instructions").innerHTML = "*As images appear on the screen, feel free to drag them.";
}

// *Display Stickers*
function showhide(divvy) {
    var elements = document.getElementsByTagName("*");
    var highest_index = 0;

    for (var i = 0; i < elements.length - 1; i++) {
        if (parseInt(elements[i].style.zIndex) > highest_index) {
            highest_index = parseInt(elements[i].style.zIndex);
        }
    }
    document.getElementById(divvy).style.display = "block";
    document.getElementById(divvy).style.zIndex = highest_index + 1;
}

// *Make elements draggable*
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

// *Randomize sticker positions*
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

//*Rainbow*
var par = document.getElementById("FivePoints");
var colors = ["red", "blue", "green", "orange", "yellow"];

par.innerHTML = par.innerHTML.split('').map(function(c) {
    return "<span class='Level_1 " + colors[Math.floor(Math.random() * colors.length)] + "'" + ">" + c + "</span>"
}).join('');

var element = document.getElementById("FivePoints");
element.classList.add("Level_1");

var s_saver;

$('body').mousemove(function() {
    clearTimeout(s_saver);

    s_saver = setTimeout(function() {
        $('#screensaver').fadeIn(600000);
    }, 4000);

    $('#screensaver').fadeOut(100);
});