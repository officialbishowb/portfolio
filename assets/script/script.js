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

/*********************************** MAIL SENDING ***********************************/

function validate(e) {
    e.preventDefault();
    var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let name = $('#flname')[0];
    let email = $('#mail')[0];
    let subject = $('#subject')[0];
    let message = $('#message')[0];

    if (email.value.match(mailformat) != null) { //if the email is valid
        sendEmail(name.value, email.value, subject.value, message.value);
    } else {
        var responseMsgContainer = document.getElementById('response_msg');
        responseMsgContainer.style.color = "red";
        responseMsgContainer.innerHTML = "Invalid e-mail address !";
    }
}

function sendEmail(name, email, subject, message) {
    let sendData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }
    $.ajax({
        type: "POST",
        url: "assets/php/telegram.php",
        data: sendData,
        success: function(response) {
            if (response == 1) {
                output = {
                    message: "Your message has been sent successfully!",
                    color: "green"
                };
                sendBackResponse(output);
            } else {
                output = {
                    message: "Your message was not sent successfully!",
                    color: "red"
                };
                sendBackResponse(output);
            }

        },
        error: function(response) {
            // outputs if any network error
            response = {
                message: "Your message was not sent successfully!",
                color: "red"
            };
            sendBackResponse(response);

        }
    })
}

function sendBackResponse(response) {
    var responseMsgContainer = document.getElementById('response_msg');
    responseMsgContainer.innerHTML = response.message;
    responseMsgContainer.style.color = response.color;
}