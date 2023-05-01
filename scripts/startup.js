
function randint(max) {
    return Math.floor(Math.random() * max);
  }

const pgbar = document.getElementById("pgbar");
let pgvalue = 100;

const itv = setInterval(() => {
    setTimeout(function(){
        pgvalue -= 5;
        pgbar.value = `${pgvalue}`;
    }, randint(3500));
    if(pgvalue <= 0){
        clearInterval(itv);
        start();
    }
}, 500);

function start(){
    document.querySelector('.bootscreen').remove();
    document.querySelector('.bootimg').remove();
    document.querySelector('.logoimg').remove();
    setTimeout(function(){
        location.href = './preload.html';
    }, 1000);
}