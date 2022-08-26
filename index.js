function envelopOpen(){
    document.getElementById('cap').classList.add('transformActive');
    document.getElementById('tapicon').classList.add('hidden');
    document.getElementById('bg2').classList.add('translateUpperBg2');
    setTimeout(addBg,800);
    setTimeout(slideOpen,1200);
}

function addBg(){
    document.getElementById('cap').classList.add('opacityZero');
    document.getElementById('bg1').classList.add('opacityZero');
}


function slideOpen(){
    document.getElementById('slide2').classList.add('translateUpper');
    setTimeout(mainSlide,1000);
}

function mainSlide(){
    document.getElementById('slide2').classList.add('slide2Main');
    document.getElementById('envelopTop').classList.add('envelopTopHidden');
    document.getElementById('bg2').classList.add('envelopTopHidden');
}