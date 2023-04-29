
function randint(max) {
    return Math.floor(Math.random() * max);
  }

const pgbar = document.getElementById("pgbar");
let pgvalue = 100;

const itv = setInterval(() => {
    setTimeout(function(){
        pgvalue -= 1;
        pgbar.value = `${pgvalue}`;
    }, randint(2000));
    if(pgvalue <= 0){
        clearInterval(itv);
        start();
    }
}, 125);

function start(){
    location.href = './desktop.html';
}