function _0x4fc0(e,t){var a=_0x2112();return(_0x4fc0=function(e,t){return a[e-=252]})(e,t)}function _0x2112(){var e=["4907376OWdBDc","9807061oFaZeC","%cYou are free to do it, but pls don't hack me.","1233066dIGiAO","1666jcjINE","color: #fff; background-color: #000; font-size: 15px; font-weight: bold; padding: 10px;","2725855Oqahxk","217VEgeAL","10kHhLUh","345416qHgxaX","135416ADmGUZ","314fQLwoj","12oLYdNj","log"];return(_0x2112=function(){return e})()}function consoleLogFun(){var e=_0x4fc0;console[e(252)]("%cHello there! I see you are trying to inspect my website.","color: #fff; background-color: #000; font-size: 15px; font-weight: bold; padding: 10px;"),console[e(252)](e(255),e(258))}function changeNavContainer(e){e<=992?($(".navbar #wrap").addClass("container-fluid"),$(".navbar #wrap").removeClass("container")):($(".navbar #wrap").addClass("container"),$(".navbar #wrap").removeClass("container-fluid"))}function changeTags(){let e=["Ethical Hacking","Web Development","Programming","Cybersecurity"],t=$("#tags")[0],a=Math.floor(Math.random()*e.length);t.innerHTML=e[a]}function setTextUnderline(){var e=$(".section-header");for(let t=0;t<=Object.keys(e).length;t++){var a=e[t];if(void 0==a)continue;let n=`
            <hr class="section-title-line" style="width: ${a.children[0].children[0].offsetWidth+30}px;">
        `;a.children[0].innerHTML+=n}}function setAge(){var e=new Date("2003-12-09"),t=new Date,a=t.getFullYear()-e.getFullYear(),n=t.getMonth()-e.getMonth();(n<0||0===n&&t.getDate()<e.getDate())&&a--,document.getElementById("age").innerHTML=a}function loadRepos(){var e=$(".carousel-inner");e.empty(),e=e[0];let t=0,a="",n="",c=$(window).width();fetch("https://api.github.com/users/officialbishowb/repos").then(e=>e==String?e:e.json()).then(r=>{if(typeof r==String){e.innerHTML("Projects could not be loaded!");return}(r=sortRepo(r)).forEach(r=>{!r.fork&&!r.private&&!r.name.includes("officialbishowb")&&null!=r.description&&(project_name=r.name.replace("-"," ").replace("_"," ").toUpperCase(),project_description=r.description,project_url=r.html_url,a=2==t&&c>973||0==t&&c<973?"active":"",(t+1)%3==0&&c>973?(n+=`
                        </div>
                    </div>   
                    `,e.innerHTML+=n,n=`
                    <div class="carousel-item ${a}">
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
                    `):(0==t&&c>973&&(n=`
                            <div class="carousel-item ${a}">
                                <div class="row justify-content-center">
                        `),c>973?n+=`
                        
                        <div class="col-md-3">
                            <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">${project_name}</h4>
                                        <p class="card-text">${project_description}</p>
                                        <a href="${project_url}" target="_blank" class="btn btn-redirect">View Project</a>
                                    </div>
                            </div>
                        </div>  
                                `:(n=`
                        <div class="carousel-item ${a}">
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
                        `,e.innerHTML+=n)),t++)})})}function sortRepo(e){return e.sort(function(e,t){return new Date(t.created_at)-new Date(e.created_at)})}$(document).ready(function(){setTextUnderline(),setAge(),loadRepos(),changeNavContainer($(window).width()),consoleLogFun()}),window.onscroll=function(){window.pageYOffset>0?$(".navbar ").addClass("box-shadow"):$(".navbar").removeClass("box-shadow")},$(".nav-link").click(function(){$(".nav-link").removeClass("active"),$(this).addClass("active")}),function(e,t){for(var a=_0x4fc0,n=e();;)try{if(parseInt(a(264))/1*(parseInt(a(257))/2)+parseInt(a(265))/3*(parseInt(a(262))/4)+parseInt(a(259))/5+parseInt(a(256))/6+-parseInt(a(260))/7*(-parseInt(a(263))/8)+-parseInt(a(253))/9+-parseInt(a(261))/10*(parseInt(a(254))/11)==445582)break;n.push(n.shift())}catch(c){n.push(n.shift())}}(_0x2112,445582),setInterval(changeTags,5e3),$(window).resize(function(){changeNavContainer($(window).width())});