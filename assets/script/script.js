/*********************************** TOGGLE MENU BAR ***********************************/
const $targetMenu = $('#menu_bar'); //menu button
const $openClass = $('#menu_item'); //menu to open
$(document).ready(function() {


    $targetMenu.on('click', function() {
        $openClass.toggleClass('open', 200);
    })
});

$(document).mouseup(e => {
    if (!$targetMenu.is(e.target)) { // if the target of the click isn't the  btn
        $openClass.removeClass('open');
    }
});

// If a navbar link is clicked, add the active class to the link
$('#menu_item li a').click(function() {
    $('#menu_item li a').removeClass("active");
    $(this).addClass("active");
});

/*********************************** ACTIVE CLASS ***********************************/
// Credit goes to w3

// Get the container element
var btnContainer = document.getElementById("menu_item");
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

/*********************************** CURRENT AGE ***********************************/
let age = document.getElementById("age");
let myBd = new Date(2003, 11, 9).getTime(); //in ms .. december = 11 as 0 is the starting
var today = new Date(); //in ms

var yearDiff = Math.floor((today - myBd) / 31536000000); // 31536000000 ms => 1 year
age.innerHTML = yearDiff;
