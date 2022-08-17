const POP_FOLDER = "<div class='openApp-container viewDiv' id=''>"
                +   "<div class='commonAppTop'>"
                +       "<div class='commonLeft'></div>"
                +       "<div class='commonRight' id='commonRight'>"
                +           "<img src='resource/img/minimize.svg' id='appMiniSize' alt='minimize'/>"
                +           "<img src='resource/img/maximize.svg' id='appMaxSize' alt='maximize'/>"
                +           "<img src='resource/img/close.svg' id='appClose' alt='close'/>"
                +       "</div>"
                +   "</div>"
                +   "<div class='commonAppBody'>"
                +       "<div class='menubar'></div>"
                +       "<div class='contents'></div>"
                +   "</div>"
                + "</div>" ;

// #########################################################################################################################

function idxGetClock(){
    var now = getClockInfo();
    
    $("p#clockArea").text(now.hour + ":" + now.minites);
    $("p#dateArea").text(now.dayNm + " " + now.monthNm + " " + now.day);
}

function idxChgScreen(){
    var soundSvg = '<img src="resource/img/sound-on.svg" id="soundSvg" alt="sound on"/>';
    var logoutSvg = '<img src="resource/img/logout.svg" id="logoutSvg" alt="logout"/>';
    var betterySvg = '<img src="resource/img/battery.svg" alt="bettery"/><span class="bettery-txt pL10">85%</span>';
    $("div#idxScreen > div#idxTop").html(soundSvg + logoutSvg + betterySvg);

    var profiles = '<div class="userInfo mB50">'
                +  '    <img src="resource/img/user.jpeg" id="userImg" alt="userImg"/>'
                +  '    <div class="userEnter mT50">'
                +  '        <p class="userNm">GUEST</p>'
                +  '        <img src="resource/img/btn-next.svg" id="nextBtn" alt="next Button"/>'
                +  '    </div>'
                +  '</div>';
    $("div#idxScreen > div#idxCenter").html(profiles);
    $('div#idxScreen').attr('id', 'idxCover');
}

function mainBgScreen(){
    $("div#mainContainer").css("background-image", "url('"+ getBackground() +"')");
}

function mainClickSvg(type, svgNm) {
    var apdCnt = "";

    if(type==='bar'){
        if($("div.openDiv-container").length != 0){
            $("div.openDiv-container").remove();
        }
        else {
            // 전원 버튼
            if(svgNm === 'home') {
                apdCnt += "<div class='openDiv-container homeDiv' id='homeDiv'>"
                        +   ""
                        + "</div>";
            }
            // 오늘 정보
            else if(svgNm === 'todayInfo') {
                apdCnt += "<div class='openDiv-container calenderDiv' id='calenderDiv'>"
                        +   ""
                        + "</div>";
            }
        }
    }
    else if(type==='folder'){
        if(svgNm === 'close') {
            apdCnt = "";
            $("div.openApp-container").remove();
        }
        else if(svgNm === 'miniSize') {
            apdCnt = "";
            $("div.openApp-container").css({"width":"900px", "height":"600px"});
            $("div.menubar").css({"height":"100%"});
            $("div.contents").css({"height":"100%"});
        }
        else if(svgNm === 'maxSize') {
            apdCnt = "";
            $("div.openApp-container").css({"width":"1500px", "height":"860px"});
            $("div.menubar").css({"height":"812px"});
            $("div.contents").css({"height":"812px"});
        }
        else if(svgNm === 'sub-tpolio') {
            apdCnt += POP_FOLDER;
            $("div.openApp-container").remove();
        }
        
    }

    $("div.openDiv-container").remove();
    $('div#ctnScreen').prepend(apdCnt);
}