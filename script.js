// ============================================================
//
// How To: CTRL+A then CTRL+C to copy script
// Open Gimkit console and do CTRL+V then ENTER to run script
//
// ============================================================





alert("Gimkit Answer Tracker - Made By Brad\nThe more questions you answer the smarter it gets.For best results use touchscreen only and dont spam it.");
var oldQuestion = '';
var answers = {};
var hover = ''
var userAnswer = null;
var questionUpdateChecker = setInterval(function(){
    try {
        var arr = document.querySelectorAll(':hover');
        for(var i=0;i<arr.length;i++) if(arr[i].className == 'sc-jjgyjb bAjgcl') userAnswer=arr[i].firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.innerHTML;
        
        if(document.getElementsByClassName('sc-hJfILt fdfyHC')[0]!=null) {
            var question = document.getElementsByClassName('sc-hJfILt fdfyHC')[0].firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.innerHTML.toString()
            if(oldQuestion != question) oldQuestion = question;
        } else {
            if(document.getElementsByClassName('sc-fuzEkO bCVktY')[0].firstChild.firstChild.innerHTML.includes('+')) answers[oldQuestion] = userAnswer;
            if(document.getElementsByClassName('sc-dRFBHB cdrUj')[0]) answers[oldQuestion] = null;
        }
        arr = document.getElementsByClassName('sc-jjgyjb bAjgcl');
        if(!answers[oldQuestion]) return;
        for(var i=0;i<arr.length;i++) {
            var option = arr[i].lastChild.lastChild.lastChild.lastChild.lastChild.lastChild.innerHTML;
            if(option.includes(answers[oldQuestion])) arr[i].style='position:absolute;width:100%;height:100%;'
            else arr[i].style='position:absolute;width:0%;height:0%;top:-100%'
        }
    } catch (error) {
        
    }
},100)
