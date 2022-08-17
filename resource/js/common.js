function isNull(str){
    let chkBool = false;
    if(str === null || str === undefined || str === "") {
        chkBool = true;
    }
    return chkBool;
}

function getClockInfo(){
    var dayNm = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday');
    var MonthNm = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

    var date = new Date();

    var hour = date.getHours();
    hour = hour < 10 ? '0' + hour.toString() : hour.toString();

    var minites = date.getMinutes();
    minites = minites < 10 ? '0' + minites.toString() : minites.toString();

    return res = {
        'day' : date.getDate(),
        'hour' : hour,
        'minites' : minites,
        'monthNm' : MonthNm[date.getMonth()],
        'dayNm' : dayNm[date.getDay()]
    };
}

function getBackground(){
    var bgUrl = "./resource/img/wallpaper/";
    var bgNum = 5;

    var randBgNum = Math.floor(Math.random() * (bgNum - 1 + 1)) + 1;
    bgUrl = "./resource/img/wallpaper/"+ randBgNum +".jpg";

    return bgUrl;
}

function chgSoundSvg(target){
    var src = 'resource/img/sound-on.svg';
    var alt = 'sound on';

    if(target === 'resource/img/sound-on.svg'){
        src = 'resource/img/sound-off.svg';
        alt = 'sound off';
    }

    $('img#soundSvg').attr('src', src);
    $('img#soundSvg').attr('alt', alt);
}