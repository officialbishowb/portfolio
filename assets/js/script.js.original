$( document ).ready(function() {
    setTextUnderline();
    setAge();
    loadRepos();
    changeNavContainer($(window).width());
    consoleLogFun()
});

// Add a box shadow when the windows page move in y  
window.onscroll = function() {
    if (window.pageYOffset > 0) {
        $('.navbar ').addClass('box-shadow');

    } else {
        $('.navbar').removeClass('box-shadow');
    }
}

// Adding class on nav link click 
$('.nav-link').click(function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
});

// Fun console logs. Nasa secret
(function(_0x5022c1, _0x4f7164) {
    var _0x10f23a = _0x4fc0,
        _0x463eed = _0x5022c1();
    while (!![]) {
        try {
            var _0x40da81 = parseInt(_0x10f23a(0x108)) / 0x1 * (parseInt(_0x10f23a(0x101)) / 0x2) + parseInt(_0x10f23a(0x109)) / 0x3 * (parseInt(_0x10f23a(0x106)) / 0x4) + parseInt(_0x10f23a(0x103)) / 0x5 + parseInt(_0x10f23a(0x100)) / 0x6 + -parseInt(_0x10f23a(0x104)) / 0x7 * (-parseInt(_0x10f23a(0x107)) / 0x8) + -parseInt(_0x10f23a(0xfd)) / 0x9 + -parseInt(_0x10f23a(0x105)) / 0xa * (parseInt(_0x10f23a(0xfe)) / 0xb);
            if (_0x40da81 === _0x4f7164) break;
            else _0x463eed['push'](_0x463eed['shift']());
        } catch (_0xc15b9e) {
            _0x463eed['push'](_0x463eed['shift']());
        }
    }
}(_0x2112, 0x6cc8e));

function _0x4fc0(_0x3d1d4b, _0x22dea3) {
    var _0x21120d = _0x2112();
    return _0x4fc0 = function(_0x4fc0f4, _0x59c585) {
        _0x4fc0f4 = _0x4fc0f4 - 0xfc;
        var _0x25a93a = _0x21120d[_0x4fc0f4];
        return _0x25a93a;
    }, _0x4fc0(_0x3d1d4b, _0x22dea3);
}

function _0x2112() {
    var _0x16c059 = ['4907376OWdBDc', '9807061oFaZeC', '%cYou\x20are\x20free\x20to\x20do\x20it,\x20but\x20pls\x20don\x27t\x20hack\x20me.', '1233066dIGiAO', '1666jcjINE', 'color:\x20#fff;\x20background-color:\x20#000;\x20font-size:\x2015px;\x20font-weight:\x20bold;\x20padding:\x2010px;', '2725855Oqahxk', '217VEgeAL', '10kHhLUh', '345416qHgxaX', '135416ADmGUZ', '314fQLwoj', '12oLYdNj', 'log'];
    _0x2112 = function() {
        return _0x16c059;
    };
    return _0x2112();
}

function consoleLogFun() {
    var _0x163cce = _0x4fc0;
    console[_0x163cce(0xfc)]('%cHello\x20there!\x20I\x20see\x20you\x20are\x20trying\x20to\x20inspect\x20my\x20website.', 'color:\x20#fff;\x20background-color:\x20#000;\x20font-size:\x2015px;\x20font-weight:\x20bold;\x20padding:\x2010px;'), console[_0x163cce(0xfc)](_0x163cce(0xff), _0x163cce(0x102));
}



// Changing the container to container fluid when the menu icon is displayed vice versa
function changeNavContainer(screenWidth){
    if(screenWidth <= 992){
        $('.navbar #wrap').addClass('container-fluid');
        $('.navbar #wrap').removeClass('container');

    }else{
        $('.navbar #wrap').addClass('container');
        $('.navbar #wrap').removeClass('container-fluid');
    }

}

// Tags changer every 5 seconds
function changeTags(){
    let tags = ['Ethical Hacking', 'Web Development', 'Programming', 'Cybersecurity'];
    let output = $('#tags')[0];

    let index = Math.floor(Math.random() * tags.length);
    output.innerHTML = tags[index];

}

setInterval(changeTags,5000);

// Determine .section-title-line width via the text
function setTextUnderline(){
    var underline_class = "section-title-line";

    var textContainer = $('.section-header');
    for(let i = 0; i <= Object.keys(textContainer).length; i++){
        var textElem = textContainer[i];
        if(textElem == undefined) continue;

        var text_width = textElem.children[0].children[0].offsetWidth + 30;
        let hr_tag = `
            <hr class="${underline_class}" style="width: ${text_width}px;">
        `;
        textElem.children[0].innerHTML += hr_tag;
    }
    
}



// Set the current age
function setAge(){

    // I didn't code this Github CoPilot did.. but it is not that hard
    var bDayDate = new Date("2003-12-09");

    var today = new Date();
    var age = today.getFullYear() - bDayDate.getFullYear(); // current year - birthday year = my age
    var m = today.getMonth() - bDayDate.getMonth(); // current month starting from 0 - my birthday month = month difference

    // If the month different is smaller than 0 , equal to 0 and today date is smaller than the bday date
    // then subtract 

    if (m < 0 || (m === 0 && today.getDate() < bDayDate.getDate())) {
        age--;
    }
    document.getElementById("age").innerHTML = age;
}


// Load my github repostiories
// I know this code is a mess... If you hate it code it better and send it to me :) 😏
function loadRepos(){
    var repos_inner = $('.carousel-inner');
    repos_inner.empty();
    repos_inner = repos_inner[0];
    let i = 0;
    let isActive = ""
    let project = ""

    let screenWidth = $(window).width();
    fetch("https://api.github.com/users/officialbishowb/repos")
    .then(response => response == String ? response : response.json())
    .then(data => {
        if (typeof(data) == String) {
            repos_inner.innerHTML("Projects could not be loaded!"); 
            return
        };
        data = sortRepo(data);
        data.forEach(repo => {

            if(!repo.fork && !repo.private && !repo.name.includes("officialbishowb") && repo.description != null){
                project_name = repo.name.replace('-',' ').replace('_',' ').toUpperCase();
                project_description = repo.description;
                project_url = repo.html_url
                
                if(i == 2 && screenWidth > 973 || i == 0 && screenWidth < 973) isActive ="active";
                else isActive =""

                if ((i+1) % 3 == 0 && screenWidth > 973){

                    // After 3 projects are added end it
                    project += `
                        </div>
                    </div>   
                    `
                    repos_inner.innerHTML += project;

                    // Start a new row
                    project = `
                    <div class="carousel-item ${isActive}">
                        <div class="row justify-content-center">

                            <div class="col-md-3">
                                <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">${project_name}</h4>
                                            <p class="card-text">${project_description}</p>
                                            <a href="${project_url}" target="_blank" class="btn btn-redirect">View Project</a>
                                        </div>
                                </div>
                            </div>   
                    `;
                }
                else{
                    // For the first time
                   if (i == 0 && screenWidth > 973){
                        project = `
                            <div class="carousel-item ${isActive}">
                                <div class="row justify-content-center">
                        `;
                    }
                   
                    if(screenWidth > 973){
                        // Just add another project to the row
                        project += `
                        
                        <div class="col-md-3">
                            <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">${project_name}</h4>
                                        <p class="card-text">${project_description}</p>
                                        <a href="${project_url}" target="_blank" class="btn btn-redirect">View Project</a>
                                    </div>
                            </div>
                        </div>  
                                `;
                    }
                    else{
                        // If the screen is smaller than 973
                            project = `
                        <div class="carousel-item ${isActive}">
                            <div class="row justify-content-center">

                                <div class="col-6">
                                    <div class="card">
                                            <div class="card-body">
                                                <h4 class="card-title">${project_name}</h4>
                                                <p class="card-text">${project_description}</p>
                                                <a href="${project_url}" target="_blank" class="btn btn-redirect">View Project</a>
                                            </div>
                                    </div>
                                </div>   
                            </div>
                        </div>  
                        `;
                        repos_inner.innerHTML += project;
                    }
                }
                                
                i++;

            }
            
        });
      
        
    });
    
}

// Sort the repos Object
function sortRepo(repos){
    return repos.sort(function(a,b){
        return new Date(b.created_at) - new Date(a.created_at);
    });
}

// On Resize 
$(window).resize(function(){
    var screenWidth = $(window).width();
    changeNavContainer(screenWidth);
});