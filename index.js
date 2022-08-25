function envelopOpen(){
    document.getElementById('cap').classList.add('transformActive');
    setTimeout(addBg,900);
    setTimeout(slideOpen,1200);
    // setTimeout(mainSlide,3000);
}

function addBg(){
    document.getElementById("bg").src = "images/bg2.png";
    document.getElementById('cap').style.zIndex= '-1';
}


function slideOpen(){
    document.getElementById('slide2').classList.add('translateUpper');
    
    setTimeout(mainSlide,1000);
    document.getElementById('envlopTop').classList.add('envlopTopHidden');
    document.getElementById('bg').classList.add('envlopTopHidden');
}

function mainSlide(){
    document.getElementById('slide2').classList.add('slide2Main');
}